// import React from "react"
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import {nbaPctMins} from './Helpers/Mappings.js';
// import InfoIcon from '@material-ui/icons/Info';
// import Tooltip from '@material-ui/core/Tooltip';
// import Card from '@material-ui/core/Card';

// const HtmlTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
//   },
// }))(Tooltip);

// export default function PlayerCardNotes({playerData}) {
//   var meetsMin = true;
//   var shotsReq = "";

//   // if (playerData.made_three_point_field_goals < nbaPctMins.fg) {
//   //   message += `${nbaPctMins.fg - playerData.made_three_point_field_goals} FGM `;
//   // }
//   // if (playerData.made_three_point_field_goals < nbaPctMins.threePtFg) {
//   //   message += `${nbaPctMins.threePtFg - playerData.made_three_point_field_goals} 3ptM `;
//   // }
//   // if (playerData.made_three_point_field_goals < nbaPctMins.ft) {
//   //   message += `${nbaPctMins.ft - playerData.made_three_point_field_goals} FTM`;
//   // }

//   return (
//     <HtmlTooltip
//       title={
//         <React.Fragment>
//           <Typography color="inherit">Tooltip with HTML</Typography>
//           <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
//           {"It's very engaging. Right?"}
//         </React.Fragment>
//       }
//     >
//       <InfoIcon />
//     </HtmlTooltip>
//   )
// }