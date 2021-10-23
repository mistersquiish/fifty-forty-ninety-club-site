import React from "react"
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import { pastMembers, pastWNBAMembers } from '../Helpers/Constants';

export default function ClubDescription() {
  return(
    <Box p={2} display="flex" justifyContent="center" alignItems="center">

      <Typography variant={"body2"}>
        Currently there have been <b>{pastMembers.length}</b> 50-40-90 NBA shooting seasons and <b>{pastWNBAMembers.length}</b> WNBA shooting season.
        Nash and Bird are the only players to have multiple 50-40-90 seasons.
      </Typography>
    </Box>
  )
}