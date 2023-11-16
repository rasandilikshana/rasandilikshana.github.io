import Head from "next/head";

const SEO = ({ pageTitle }) => {

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
        {pageTitle ? `${pageTitle} - Rasan Dilikshana Personal Portfolio` : "Rasan Dilikshana Personal Portfolio"}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Passionate software engineer in Sri Lanka with expertise in HTML, JavaScript, CSS, React, Laravel, and WordPress. Currently an intern at Zuse Technologies, contributing to innovative projects. Bachelor's degree candidate at the University of Colombo. Skilled in web development with a proven track record of successful projects. Let's connect and bring your ideas to life!" />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph meta tags for better social sharing */}
      <meta property="og:title" content={pageTitle || "Rasan Dilikshana Personal Portfolio"} />
      <meta property="og:description" content="Passionate software engineer in Sri Lanka with expertise in HTML, JavaScript, CSS, React, Laravel, and WordPress. Currently an intern at Zuse Technologies, contributing to innovative projects. Bachelor's degree candidate at the University of Colombo. Skilled in web development with a proven track record of successful projects. Let's connect and bring your ideas to life!" />
      <meta property="og:image" content="/assets/img/hero/dark.jpg" />
      <meta property="og:url" content="https://rasandilikshana.me" />
      <meta property="og:type" content="website" />

      {/* Twitter Card meta tags for better Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle || "Rasan Dilikshana Personal Portfolio"} />
      <meta name="twitter:description" content="Passionate software engineer in Sri Lanka with expertise in HTML, JavaScript, CSS, React, Laravel, and WordPress. Currently an intern at Zuse Technologies, contributing to innovative projects. Bachelor's degree candidate at the University of Colombo. Skilled in web development with a proven track record of successful projects. Let's connect and bring your ideas to life!" />
      <meta name="twitter:image" content="/assets/img/hero/dark.jpg" />

      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-GT7WNNYR9P"></script>
      <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
    </Head>
  </>
);}

export default SEO;
