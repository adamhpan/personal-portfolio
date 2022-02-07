module.exports = {
    siteMetadata: {
        siteUrl: "https://www.adamhpan.com",
        title: "Adam Pan - Portfolio",
        description: "Personal portfolio",
        // author: "Rainbow IT",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "",
        twitterUsername: "@rainbowit",
        getform_url:
            "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
        socials: [
            {
                id: 3,
                title: "linkedin",
                path: "https://www.linkedin.com/in/ahpan",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "1 (415) 689-3642",
            email: "blumenauer_lazarus@aleeas.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Adam",
                short_name: "adam",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
        {
            resolve: "gatsby-plugin-firebase",
            options: {
              credentials: {
                apiKey: "AIzaSyA6sjNoBNP0oLft7H85QDoAIRkmxOnJkis",
                authDomain: "personal-portfolio-95be7.firebaseapp.com",
                projectId: "personal-portfolio-95be7",
                storageBucket: "personal-portfolio-95be7.appspot.com",
                messagingSenderId: "860531821977",
                appId: "1:860531821977:web:580cdf8e745512ad381708",
                measurementId: "G-P66R0TP3FG"
              }
            }
          }
    ],
};
