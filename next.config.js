// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: false,
  sassOptions: {
    // eslint-disable-next-line no-undef
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      {
        source: '/legacy',
        destination: '/Mentions_Legales_setbrain.fr.pdf',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/Politique_de_confidentialite_setbrain.fr.pdf',
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuild: true,
  },
};
