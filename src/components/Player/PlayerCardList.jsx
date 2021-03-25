import React from "react"
import PlayerCard from "./PlayerCard";
import Box from '@material-ui/core/Box';

export default function PlayerCardList({players, isWNBA}) {
  return (
    <>
        {players.map((playerData, slug) => {
          return (
            <Box justifyContent="center" display="flex" key={slug}>
              <PlayerCard playerData={playerData} isWNBA={isWNBA}/>
            </Box>
          );
        })}
    </>
  )
}