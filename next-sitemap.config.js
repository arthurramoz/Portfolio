module.exports = {
  siteUrl: 'https://www.arthur-moreira-ramos.com.br',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/changelog', '/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/changelog', '/api/', '/_next/'],
      },
    ],
  },
};
