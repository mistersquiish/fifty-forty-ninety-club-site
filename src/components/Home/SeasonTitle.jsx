import React from "react"
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import { seasonalConfigs, SEASON_END } from '../../configs/SeasonalConfigs';

export default function SeasonTitle() {
  // Calculate if we've updated for the day
  var startTime = '06:00:00';

  var currentDate = new Date()   

  var startDate = new Date(currentDate.getTime());
  startDate.setHours(startTime.split(":")[0]);
  startDate.setMinutes(startTime.split(":")[1]);
  startDate.setSeconds(startTime.split(":")[2]);

  if (currentDate < startDate) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  const lastUpdated = `Last updated on: (${currentDate.toDateString().slice(4)})`

  return(
    <>
      <Box p={2} display="flex" justifyContent="center" alignItems="center">
        <img width={24.1} height={53.6} src="https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png" alt="my image"  />
        <Box pl={1}>
          <Typography variant={"h2"}>
            NBA {seasonalConfigs[SEASON_END] - 1}-{seasonalConfigs[SEASON_END]} Season
          </Typography>
          <Typography variant={"body2"} style={{color: 'gray'}}>
            {lastUpdated}
          </Typography>
        </Box>
      </Box>
    </>
  )
}