module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/release-notes-generator',
    {
      name: '@semantic-release/npm',
      options: {
        // Add your NPM auth token here
        npmAuthToken: process.env.NPM_TOKEN,
      },
    },
    '@semantic-release/git',
    '@semantic-release/changelog',
  ],
};
