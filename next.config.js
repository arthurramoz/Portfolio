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
        source: '/projects/:path*',
        destination: '/projetos/:path*',
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
