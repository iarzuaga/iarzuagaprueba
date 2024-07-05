// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
};