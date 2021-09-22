const path = require("path");

exports.onCreateWebpackConfig = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
        fallback: { 'assert': 'assert/' },
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              folder
              heroImage
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error while running graphql query');
    return;
  }

  const template = path.resolve('src/templates/project.tsx');
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.slug;
    createPage({
      path,
      component: template,
      context: {
        pagePath: path,
        heroImage: node.frontmatter.heroImage,
        folder: node.frontmatter.folder,
        id: node.id
      },
    });
  });
};
