const withOffline = require('next-offline')

module.exports = withOffline({
	globPatterns: ['static/**/*'],
  globDirectory: '.',
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200
        }
      }
    }
  ]
})