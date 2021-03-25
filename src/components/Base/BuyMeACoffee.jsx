import React from "react"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function BuyMeACoffee() {
  return(
    <Box pt={10} pb={5}>
      Thanks for visiting! I made this website because I found myself constantly checking players statistics to see if
      anyone was on track to join this elite club.
      <br/><br/>
      If you find yourself constantly returning to this page, consider donating!
      Even a penny or a couple ¢ents would help out with costs of hosting the site (and paying for the domain). I'll even
      add your name or handle to the donation page (... to be built). Just leave your name on the message. 😊
      <br/><br/>

      <Button size="large" href="https://www.buymeacoffee.com/henryvuong" target="_blank">
        <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="my image"  />
      </Button>
    </Box>
  )
}