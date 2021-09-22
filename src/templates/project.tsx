import { default as GalleryBase } from '@browniebroke/gatsby-image-gallery';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';
import { Background, Parallax } from 'react-parallax';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import {
  Card,
  Footer,
  Hero,
  Layout,
  Navbar,
  Title
} from '../components';
import remarkSectionize from 'remark-sectionize';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript/html.js';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gallery': {}
    }
  }
}

const Project = ({ data }) => {
  console.log('data', data.content.id);
  const pluginImage = getImage(data.placeholderImage);
  const content = data.content.frontmatter;

  const Gallery = () => (
    <GalleryBase
      images={data.galleryImages.edges.map(({ node }) => node.childImageSharp)}
    />
  );

  const customPlugin = () => {
    return (tree) => {
      visit(tree, (node) => {
        if (
          node.type === 'textDirective' ||
          node.type === 'leafDirective' ||
          node.type === 'containerDirective'
        ) {
          const data = node.data || (node.data = {});
          const hast = h(node.name, node.attributes);

          data.hName = hast['tagName'];
          data.hProperties = hast['properties']
        }
      });
    };
  };

  return (
    <Layout>
      <Helmet title={`${content.title} // Daniel Moore`} />
      <title>{content.title}</title>
      <Navbar />
      <main>
        <Hero text={content.title} />
        <Parallax
          strength={300}
          style={{ height: 800 }}
        >
          <Background>
            <GatsbyImage
              image={pluginImage}
              style={{ minHeight: 400, minWidth: '100vw' }}
              alt="Project background image"
            />
          </Background>
        </Parallax>
        <div id="content">
          <ReactMarkdown
            remarkPlugins={[
              remarkSectionize,
              remarkDirective,
              customPlugin
            ]}
            components={{
              gallery: () => <Gallery />,
              h1: ({ children }) => <Title title={children.toString()} />,
              h2: ({ children }) => <Card><h2>{children}</h2></Card>,
              ul: ({ children }) => (
                <Card><ul
                  style={{
                    listStyleType:  'none',
                  }}
                >
                  {children}
                </ul></Card>
              ),
              li: ({ children }) => <li style={{ paddingBottom: 12 }}>{children}</li>,
              em: ({ children }) => <em style={{ fontSize: '0.75em' }}>{children}</em>,
              p: ({children}) => <Card><p>{children}</p></Card>,
            }}
          >
            {data.content.rawMarkdownBody}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </Layout>
  );
};


export const query = graphql`
  query project (
    $folder: String,
    $heroImage: String,
    $id: String
  ) {
    content: markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
    placeholderImage: file(relativePath: { eq: $heroImage }) {
      childImageSharp {
        gatsbyImageData (
          placeholder: BLURRED
          formats: [AUTO, PNG, WEBP]
        )
      }
    }
    galleryImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: $folder }
    }) {
      edges {
        node {
          base
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
            )
            full: gatsbyImageData (
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`;

export default Project;
