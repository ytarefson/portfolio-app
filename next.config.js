module.exports = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
