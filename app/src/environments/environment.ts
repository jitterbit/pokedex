export const environment = {
  production: process.env['NODE_ENV'] === 'production',
  apiUrl: process.env['NG_APP_API_URL'] || 'http://localhost:3000/api'
};
