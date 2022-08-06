// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  sassOptions: {
    // eslint-disable-next-line no-undef
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['res.cloudinary.com', 'codex.so'],
  },
};
