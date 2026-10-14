module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/projetos',
        permanent: true,
      },
      {
        source: '/projects/empresa',
        destination: '/projetos/empresa',
        permanent: true,
      },
      {
        source: '/projects/faculdade',
        destination: '/projetos/faculdade',
        permanent: true,
      },
      {
        source: '/projects/pessoais',
        destination: '/projetos/pessoais',
        permanent: true,
      },
    ];
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
