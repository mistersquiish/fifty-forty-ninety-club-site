import React from "react"
import Box from '@material-ui/core/Box';
import { Typography, Link } from "@material-ui/core";
import { statMinimums } from "../Helpers/Constants";
import { seasonalConfigs, TOTAL_GAMES } from "../../configs/SeasonalConfigs";

export default function IntroDescription() {
  return(
    <Box p={2} display="flex" justifyContent="center" alignItems="center">

      <Typography variant={"body2"}>
        The "50-40-90 club" is an honor given to NBA players that have an excellent shooting season. The requirements are:
        <br/><br/>
        Shoot at least 50.0% from the field
        <br/>
        Shoot at least 40.0% from three point range
        <br/>
        Shoot at least 90.0% from the free throw line
        <br/><br/>
        In addition, players have to achieve the minimum mark to qualify for the
        <br/>
        <Link href="https://www.nba.com/stats/help/statminimums/" target="_blank">
          rate statistic requirements.
        </Link>
        <br/><br/>
        For <b>{seasonalConfigs[TOTAL_GAMES]}</b> NBA games...
        <br/><br/>
        Make at least <b>{statMinimums.fgMakes[seasonalConfigs[TOTAL_GAMES]]}</b> field goals
        <br/>
        Make at least <b>{statMinimums.threePtMakes[seasonalConfigs[TOTAL_GAMES]]}</b> three point field goals
        <br/>
        Make at least <b>{statMinimums.ftMakes[seasonalConfigs[TOTAL_GAMES]]}</b> free throws
        <br/><br/>
      </Typography>
    </Box>
  )
}