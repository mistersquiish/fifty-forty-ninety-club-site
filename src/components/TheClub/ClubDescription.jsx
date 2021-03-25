import React from "react"
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";

export default function ClubDescription() {
  return(
    <Box p={2} display="flex" justifyContent="center" alignItems="center">

      <Typography variant={"body2"}>
        Currently there have been <b>eight</b> 50-40-90 NBA shooting seasons and <b>one</b> WNBA shooting season.
        Nash and Bird are the only players to have multiple 50-40-90 seasons.
      </Typography>
    </Box>
  )
}