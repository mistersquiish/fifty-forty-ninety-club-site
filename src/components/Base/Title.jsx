import React, { useEffect, useState } from "react"
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Title({title}) {
  return(
    <Box width={'100%'} pb={3} display="flex" alignItems="center"
      style={{backgroundColor: 'rgb(4,30,50)'}}>
      <Container>
        <Typography pt={5} pb={5} variant="h1" component="p">
          {typeof title !== 'undefined' ? title : "50-40-90 Club"}
        </Typography>
      </Container>
    </Box>
  )
}