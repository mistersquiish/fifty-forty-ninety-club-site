import React from "react"
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import theme from "../Helpers/Theme.js";
import { ThemeProvider } from '@material-ui/core/styles';

export default function PercentageDisplay({title, percentage}) {
  return (
    <ThemeProvider theme={theme}>
      <Box pr={1} display="flex">
        <Box pr={1} >
          <Typography variant={"body2"}>
            {title}
          </Typography>
        </Box>
        <Box pr={1}>
          <Typography variant={"body2"} color="textSecondary" component="p">
            {percentage}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}