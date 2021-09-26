module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'cms.losstudios.xyz',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '0262e7c597ddf24f7253142b7d331a55'),
    },
  },
});
