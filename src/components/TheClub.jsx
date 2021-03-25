import React from "react"
import PlayerCardList from "./Player/PlayerCardList";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Helpers/Theme.js";
import Title from "./Base/Title";
import ClubDescription from "./TheClub/ClubDescription";
import ClubTitle from "./TheClub/ClubTitle";
import Container from '@material-ui/core/Container';
import Menu from "./Menu";
import {pastMembers, pastWNBAMembers} from "./Helpers/Constants.js";
import BuyMeACoffee from "./Base/BuyMeACoffee";

class TheClub extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-menu">
        <ThemeProvider theme={theme}>
          <Menu />
          <>
          <Title title={"Members"}/>
          <Container style={{backgroundColor: "white", margin: 0, maxWidth: "100%"}}>
            <Container maxWidth="md">
              <ClubDescription />
              <ClubTitle/>
              <PlayerCardList players={pastMembers}/>
              <ClubTitle isWNBA={true}/>
              <PlayerCardList players={pastWNBAMembers} isWNBA={true}/>
              <BuyMeACoffee />
            </Container>
          </Container>
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default TheClub;
