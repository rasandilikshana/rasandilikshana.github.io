/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    // Add a rule for handling PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/pdf/',
            outputPath: 'static/pdf/',
          },
        },
      ],
    });

    // For server-side rendering of PDFs
    if (isServer) {
      config.externals.push('pdfjs-dist/build/pdf.worker.min.js');
    }

    return config;
  },
};

module.exports = nextConfig;
