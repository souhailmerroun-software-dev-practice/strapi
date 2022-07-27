module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '94db3a74eeae74d81b09632bc0317bbd'),
  },
});
