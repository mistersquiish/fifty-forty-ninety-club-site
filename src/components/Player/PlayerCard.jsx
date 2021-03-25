import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {calculateAvg, calculatePct} from '../Helpers/CalculateStats.js';
import {nbaTeamColor, wnbaTeamColor} from '../Helpers/Mappings.js';
import PercentageDisplay from './PercentageDisplay';
import PlayerCollapsible from './PlayerCollapsible';
import PlayerTitle from './PlayerTitle';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    marginTop: 10,
    marginBottom: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  summary: {
    width: '100%',
    height: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export default function PlayerCard({playerData, isWNBA}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const stats = {
    threePtPercentage: calculatePct(playerData.made_three_point_field_goals ,playerData.attempted_three_point_field_goals),
    fgPercentage: calculatePct(playerData.made_field_goals ,playerData.attempted_field_goals),
    ftPercentage: calculatePct(playerData.made_free_throws ,playerData.attempted_free_throws),
    ppg: calculateAvg(playerData.points ,playerData.games_played),
    ast: calculateAvg(playerData.assists ,playerData.games_played),
    reb: calculateAvg(playerData.defensive_rebounds + playerData.offensive_rebounds ,playerData.games_played),
    stl: calculateAvg(playerData.steals ,playerData.games_played),
    tov: calculateAvg(playerData.turnovers ,playerData.games_played),
    blk: calculateAvg(playerData.blocks ,playerData.games_played),
  };

  const teamColor = isWNBA ? wnbaTeamColor[playerData.team] : nbaTeamColor[playerData.team];
  const moreInfoLink = isWNBA ? `https://www.basketball-reference.com/wnba/players/${playerData.slug[0]}/${playerData.slug}.html` : `https://www.basketball-reference.com/players/${playerData.slug[0]}/${playerData.slug}.html`;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Box style={{ height: 3, backgroundColor: teamColor}} />
      <Box display="flex">
        <Container>
          <PlayerTitle position={playerData.positions[0]} name={playerData.name} team={playerData.team} season={playerData.season} isWNBA={isWNBA}/>
          <Fade in={expanded} timeout={500}>
            <Box display="flex" position="relative">
              <Box position="absolute" bottom={7} left={-12}>
                <Link href={moreInfoLink} target="_blank">
                  <InfoIcon fontSize="small" color="action"/>
                </Link>
              </Box>
            </Box>
          </Fade>
          <Box display="flex" justifyContent="center" position="relative">
            <Fade in={!expanded} timeout={500}>
              <div className={classes.summary}>
                <Box>
                  <PercentageDisplay title="PPG" percentage={stats.ppg}/>
                </Box>
                <Box>
                  <PercentageDisplay title="FG%" percentage={stats.fgPercentage}/>
                </Box>
                <Box>
                  <PercentageDisplay title="3pt%" percentage={stats.threePtPercentage}/>
                </Box>
                <Box>
                  <PercentageDisplay title="FT%" percentage={stats.ftPercentage}/>
                </Box>
              </div>
            </Fade>
            
            <Box position="absolute" bottom={2} right={-20}>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Box>
            
          </Box>
        </Container>
      </Box>
      <Collapse in={expanded} timeout="auto" >
        <PlayerCollapsible playerStats={stats} playerData={playerData} isWNBA={isWNBA}/>
      </Collapse>
    </Card>      
  )
}