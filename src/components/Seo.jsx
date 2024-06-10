import Head from "next/head";

const SEO = ({ pageTitle, metaDescription, metaKeywords }) => {
  const defaultDescription = "Personal portfolio of Rasan Dilikshana, skilled in HTML,CSS,React,Laravel,WordPress,SEO.Associate at Zuse Technologies.Let's connect,bring your ideas to life";
  const defaultKeywords = "Rasan Dilikshana, software engineer, web developer, HTML, CSS, ReactJs , NextJs, Laravel, WordPress, SEO, Zuse Technologies, personal portfolio, Sri Lanka, web development, software development";

  const analyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-GT7WNNYR9P');
  `;

  return (
    <>
      <Head>
        <title>
          {pageTitle}
        </title>
        <meta http-equiv='content-language' content='en-gb'/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metaDescription || defaultDescription} />
        <meta name="keywords" content={metaKeywords || defaultKeywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png"/>
        <link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>



        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Other head elements */}
        <link rel="canonical" href="https://rasandilikshana.com" />

        {/* Schema.org */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Rasan Dilikshana",
              "jobTitle": "Software Developer",
              "url": "https://rasandilikshana.com/",
              "sameAs": [
                "https://twitter.com/Rasan17516802",
                "https://www.linkedin.com/in/rasan-dilikshana",
                "https://github.com/rasandilikshana"
              ]
            }
          `}
        </script>

        {/* Open Graph meta tags for better social sharing */}
        <meta property="og:title" content={pageTitle || "Rasan Dilikshana Personal Portfolio"} />
        <meta property="og:description" content={metaDescription || defaultDescription} />
        <meta property="og:image" content="/assets/img/hero/rasan-dilikshana.webp" />
        <meta property="og:url" content="https://rasandilikshana.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for better Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle || "Rasan Dilikshana Personal Portfolio"} />
        <meta name="twitter:description" content={metaDescription || defaultDescription} />
        <meta name="twitter:image" content="/assets/img/hero/rasan-dilikshana.webp" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GT7WNNYR9P"></script>
        <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
      </Head>
    </>
  );
};

export default SEO;
