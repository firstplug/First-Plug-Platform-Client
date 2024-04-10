/** @type {import('next').NextConfig} */

const fs = require('fs');
const path = require('path');

module.exports = () => {
  
  const envFile = path.resolve(process.cwd(), '.env');

  if (!fs.existsSync(envFile)) {
    console.error('ERROR: El archivo .env no existe. Copia el archivo .env.example y completa las variables de entorno necesarias.');
    process.exit(1);
  }

 
  const requiredEnvVariables = ['NEXT_PUBLIC_API_URL_DEV', 'NEXT_PUBLIC_API_URL_PROD', 'NEXTAUTH_SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET'];
  const missingVariables = requiredEnvVariables.filter((key) => !process.env[key]);

  if (missingVariables.length > 0) {
    console.error(`ERROR: The following environment variables are missing: ${missingVariables.join(', ')}`);
    process.exit(1);
  }


  const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/login',
          permanent: true,
        },
      ];
    },
    images: {
  
      domains: [
        'lh3.googleusercontent.com',
        'loremflickr.com',
        'picsum.photos',
        'cloudflare-ipfs.com',
        'avatars.githubusercontent.com',
        'example.com',
      ],
    },
  };

  return nextConfig;
};
