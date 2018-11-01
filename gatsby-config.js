module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      }
    },
    `gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				anonymize: true,
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				head: true,
				respectDNT: true,
				trackingId: `UA-125425021-1`,
			}
		},
  ]
};
