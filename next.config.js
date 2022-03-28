/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL:
      "mongodb+srv://amir:amious@cluster0.3ursu.mongodb.net/e-commerce?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET:
      "0b91403bee682d2881c2dae0a75592a26cd823bbc9e97a4cc656861940d61dabd21ab4f4601114a04915d1de8306a757331768a7316027b9628e44f878375805",
    REFRESH_TOKEN_SECRET:
      "8330b1738b4b81a634fc8f581fdce55691d3c22184526ff3e44576f412ff15712c249dc32a796f1bc3d7d5965ffb570fc990dba8c79fbe673e9a553e329d043d",
  },
};

module.exports = nextConfig;
