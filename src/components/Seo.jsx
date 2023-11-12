import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} - Rasan Dilikshana Personal Portfolio`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Passionate software engineer in Sri Lanka with expertise in HTML, JavaScript, CSS, React, Laravel and WordPress. Currently an intern at Zuse Technologies, contributing to innovative projects. Bachelor's degree candidate at the University of Colombo. Skilled in web development with a proven track record of successful projects. Let's connect and bring your ideas to life!" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
);

export default SEO;