import React from "react"
import { Helmet } from 'react-helmet';
import Contact from '../components/Contact';
import '../style/main.scss';
import favicon from '../static/favicon.ico';

// markup
export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'50-40-90 Club.info Contact'}</title>
        <meta name="description" content={'Contact page for suggestions and inquiries'} />
        <link rel="icon" href={favicon} />

        <meta property="og:title" content="50-40-90 Club.info Contact Page" />
        <meta property="og:description" content="Contact me with suggestions, bugs, or other inquiries." />
        {/* <meta property='og:image' content={}></meta> */}
      </Helmet>
      <Contact />
    </>
  );
};

