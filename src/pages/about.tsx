import { Helmet } from 'react-helmet';
import { Background, Parallax } from 'react-parallax';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  Card,
  Footer,
  Hero,
  Layout,
  Navbar,
} from '../components';
import { breakpoints } from '../constants';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          gatsbyImageData (
            placeholder: BLURRED
            formats: [AUTO, PNG, WEBP]
          )
        }
      }
    }
  `);

  const heroImage = getImage(data.heroImage);
  const small = typeof window !== 'undefined' && window.matchMedia(`(max-width: ${breakpoints.md}px)`).matches;

  return (
    <Layout>
      <Helmet title="About // Daniel Moore" />
      <title>About</title>
      <Navbar />
      <main>
        <Hero text="About Me" />
        <Parallax
          strength={300}
          style={{ height: 400 }}
        >
          <Background>
            <GatsbyImage
              image={heroImage}
              style={{ minHeight: 400, minWidth: small ? '100vw' : '50vw' }}
              alt="Portrait image"
            />
          </Background>
        </Parallax>
        <section>
          <Card>
            <p>
              I’m a theatre director and dramaturg based in Phoenix, AZ. I’m
              currently a senior at Arizona State University, majoring in
              Theatre and in Physics. My passions lie in contemporary works and
              new play development (and, in fact, all of the plays I’ve directed
              outside of an educational setting have been in-development plays).
              My interests and specialties are in horror, atmospheric work, and
              immersive theatre.
            </p>
            <p>
              As a director, I’ve done a lot of work with{' '}
              <a href="https://www.binarytheatre.org/">Binary Theatre Company</a>,
              a student and new work-centered theatre company associated with
              ASU, directing the one-act immersive horror play{' '}
              <Link to="/projects/unsettled-supper">An Unsettled Supper</Link> and
              the three-part audio drama{' '}
              <Link to="/projects/theres-something">
                There’s Something Out There
              </Link>.
              I’ve also worked in an educational setting, directing 10-minute and
              one-act plays under professor William Partlan.
            </p>
            <p>
              I’ve recently become Artistic Director, as well as a founding
              member, of{' '}
              <a href="https://scawwyhowwowtheatre.com/">
                Scawwy Howwow Theatre Company
              </a>,
              which we will be using as
              a proving grounds to experiment with new methods, genres, and
              mediums. My first directing piece through the company is{' '}
              <a href="https://anchor.fm/scawwowhowwowtheatre">
                untitled [redacted]
              </a>.
            </p>
            <p>
              As a dramaturg, I’ve recently worked with ASU’s theatre department
              on a recent production of The Snow, directed by Claire Redfield and
              Jillian Johnson. I was able to put my physics knowledge and
              research experience to use to help contexxtualize the scientific
              process and the philosophies related to it for the actors in a show
              centered around a young inventor.
            </p>
          </Card>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default About;
