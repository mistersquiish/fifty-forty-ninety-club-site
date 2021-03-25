import React from "react"
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";

export default function ClubTitle({isWNBA}) {
  const photoLink = isWNBA ? "https://content.sportslogos.net/logos/16/1152/full/6613__wnba-alternate-2020.png" : "https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png";
  return(
    <>
      <Box p={2} display="flex" justifyContent="center" alignItems="center">
        <img width={24.1} height={53.6} src={photoLink} alt="my image"  />
        <Box pl={1}>
          <Typography variant={"h2"}>
            {isWNBA ? "WNBA Seasons 1996-2019" : "NBA Seasons 1979-2020"}
          </Typography>
        </Box>
      </Box>
    </>
  )
}