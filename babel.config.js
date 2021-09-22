module.exports = api => {
  const isTest = api.env('test');

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: isTest ? 'commonJs' : false,
          shippedProposals: true,
          targets: {
            node: '16.9.1',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  }
}
