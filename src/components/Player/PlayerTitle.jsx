import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {nbaTeams, wnbaTeams, nbaPositions} from '../Helpers/Mappings.js';

export default function PlayerTitle({position, name, team, season, isWNBA}) {
  return (
    <>
      <Box display="flex" justifyContent="center" pt={.5} pb={1}>
        <Box pr={1}>
          <Typography variant="body2" component="p">
            {nbaPositions[position]}
          </Typography>
        </Box>
        <Box pr={1} display="flex" flexWrap="wrap">
          <Box pr={.5}>
            <Typography variant="h5" component="p">
              {name}
            </Typography>
          </Box>
          <Typography variant="h6" component="p">
            ({isWNBA ? wnbaTeams[team] : nbaTeams[team]})
          </Typography>
        </Box>
      </Box>
      <Box pb={1}>
        <Typography variant="h6" component="p" color="textSecondary">
          {isWNBA ? season : (season ? `${season - 1}-${season}` : "")}
        </Typography>
      </Box>
    </>
  )
}