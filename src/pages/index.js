import React from "react"
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../style/main.scss';
import logo from '../static/logo.png';
import favicon from '../static/favicon.ico';

// markup
export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'50-40-90 Club'}</title>
        <meta name="description" content={'504090 Club tracker. See which players in the NBA 2020-2021 season are on track and on pace for a 50-40-90 shooting season. Made by Henry Vuong.'} />
        <link rel="icon" href={favicon} />
        <meta name="google-site-verification" content="BBinKdbh9MbrUYru6E3q9BGjKOFCS0iP_sbHE9lpMQo" />

        <meta property="og:type" content="website"/>
        <meta property="og:title" content="NBA 50-40-90 Club Tracker" />
        <meta property="og:url" content="https://504090club.info/"/>
        <meta property="og:description" content="Keep up to date with current players on track for a 50-40-90 season" />
        <meta property='og:image' content={logo}/>


        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://504090club.info/"/>
        <meta property="twitter:title" content="NBA 50-40-90 Club Tracker"/>
        <meta property="twitter:description" content="See which players in the NBA 2020-2021 season are on track for a 50-40-90 shooting season"/>
        <meta property="twitter:image" content={logo}/>
      </Helmet>
      <App />
    </>
  );
};

