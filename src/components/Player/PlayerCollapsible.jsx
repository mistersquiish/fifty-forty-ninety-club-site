import React from "react";
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import PercentageDisplay from './PercentageDisplay';

const useStyles = makeStyles((theme) => ({
  playerPicture: {
    width: 70,
    height: 110,
  },
}));

export default function PlayerCollapsible({playerData, playerStats, isWNBA}) {
  const classes = useStyles();

  const photoLink = isWNBA ? `https://www.basketball-reference.com/req/202102081/images/wnba-players/${playerData.slug}.jpg` : `https://www.basketball-reference.com/req/202102081/images/players/${playerData.slug}.jpg`;

  return (
    <Box display="flex">
      <Box pl={1} className={classes.playerPicture}>
        <CardMedia
          className={classes.playerPicture}
          image={photoLink}
          title="playerphoto"
        />
      </Box>  
      <Box pt={1} width={338}>
          <Box display="flex" position="relative" justifyContent="center">
            <Box display="flex" position="relative">
              <Box>
                <PercentageDisplay title="PPG" percentage={playerStats.ppg}/>
                <PercentageDisplay title="BLK" percentage={playerStats.blk}/>
                <Box mt={1}>
                  <PercentageDisplay title="FGM" percentage={playerData.made_field_goals}/>
                  <PercentageDisplay title="FGA" percentage={playerData.attempted_field_goals}/>
                  <PercentageDisplay title="FG%" percentage={playerStats.fgPercentage}/>
                </Box>
              </Box>
              <Box>
                <PercentageDisplay title="AST" percentage={playerStats.ast}/>
                <PercentageDisplay title="TOV" percentage={playerStats.tov}/>
                <Box mt={1}>
                  <PercentageDisplay title="3ptM" percentage={playerData.made_three_point_field_goals}/>
                  <PercentageDisplay title="3ptA" percentage={playerData.attempted_three_point_field_goals}/>
                  <PercentageDisplay title="3pt%" percentage={playerStats.threePtPercentage}/>
                </Box>
              </Box>
              <Box>
                <PercentageDisplay title="REB" percentage={playerStats.reb}/>
                <PercentageDisplay title="STL" percentage={playerStats.stl}/>
                <Box mt={1}>
                <PercentageDisplay title="FTM" percentage={playerData.made_free_throws}/>
                <PercentageDisplay title="FTA" percentage={playerData.attempted_free_throws}/>
                <PercentageDisplay title="FT%" percentage={playerStats.ftPercentage}/>
                </Box>
              </Box>
            </Box>
          </Box>
      </Box>
    </Box>
  )
}