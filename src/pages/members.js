import React from "react"
import { Helmet } from 'react-helmet';
import TheClub from '../components/TheClub';
import '../style/main.scss';
import logo from '../static/logo.png';
import favicon from '../static/favicon.ico';

// markup
export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'50-40-90 Club Members'}</title>
        <meta name="description" content={'Members of the NBA 50-40-90 Club.'} />
        <link rel="icon" href={favicon} />

        <meta property="og:title" content="NBA 50-40-90 Club Members" />
        <meta property="og:description" content="View NBA players who had astounding shooting seasons." />
        <meta property='og:image' content={logo}></meta>
      </Helmet>
      <TheClub />
    </>
  );
};

