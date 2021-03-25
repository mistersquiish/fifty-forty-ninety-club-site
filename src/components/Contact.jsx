import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Helpers/Theme.js";
import Title from "./Base/Title";
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Menu from "./Menu";
import EmailIcon from '@material-ui/icons/Email';
import { Typography } from "@material-ui/core";
import Lottie from 'react-lottie';
import contactLottie from '../static/contact-lottie.json';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-menu">
        <ThemeProvider theme={theme}>
          <Menu />
          <Title />
          <Container style={{backgroundColor: "white", margin: 0, maxWidth: "100%"}}>
              <Box pt={7} pb={7}>
                
                <Typography variant={"h4"} style={{fontFamily: 'Bodoni Moda'}}>
                  Contact
                </Typography>
                <Box p={2}>
                  <Typography variant={"h5"} style={{fontFamily: 'Bodoni Moda'}}>
                    Feel free to contact me with suggestions, bugs, or other inquiries.
                  </Typography>
                </Box>
                
                <a href={`mailto:henryvuong2408LC@gmail.com`}><EmailIcon color='action' fontSize="small"/></a>
              </Box>
              <Lottie
                  options={{
                    animationData: contactLottie,
                    autoplay: true
                  }}
                  height={250}
                  style={{pointerEvents: 'none'}}
                />
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default Contact;
