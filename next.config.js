/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL:
      "mongodb+srv://amir:amious@cluster0.3ursu.mongodb.net/e-commerce?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
