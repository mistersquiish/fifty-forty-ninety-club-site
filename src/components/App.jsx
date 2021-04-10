import React from "react"
import firebase from "gatsby-plugin-firebase";
import PlayerCardList from "./Player/PlayerCardList";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./Helpers/Theme.js";
import BuyMeACoffee from "./Base/BuyMeACoffee";
import Title from "./Base/Title";
import SeasonTitle from "./Home/SeasonTitle";
import Menu from "./Menu";
import IntroDescription from "./Home/IntroDescription";
import Container from '@material-ui/core/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {close504090Players: [], true504090Players: [], notPace504090Players: []};
  }
  

  componentDidMount() {
    this.fetchPlayers("close504090Players");
    this.fetchPlayers("true504090Players");
    this.fetchPlayers("notPace504090Players");
  }

  fetchPlayers(playerListName) {
    // Fetches cached players on Firebase
    const db = firebase.firestore();
    var players = [];

    db.collection(playerListName).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              players.push(doc.data());
          });
          this.setState({...this.state, [playerListName]: this.sortPlayers(players)})
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
  };

  sortPlayers(players) {
    return players.sort(function(a, b){
      return (b.points / b.games_played) - (a.points / a.games_played);
    });
  }

  render() {
    return (
      <>
      <div className="container-menu">

        <ThemeProvider theme={theme}>
          <Menu />
          <Title />
          <Container style={{backgroundColor: "white", margin: 0, maxWidth: "100%"}}>
            <Container maxWidth="md">
              <IntroDescription />
              <SeasonTitle />
              <h3>Players On Pace</h3>
              <PlayerCardList players={this.state.true504090Players}/>
              <h3>Players Close</h3>
              <PlayerCardList players={this.state.close504090Players}/>
              <h3>Players Not On Shot Pace</h3>
              <PlayerCardList players={this.state.notPace504090Players}/>
              <BuyMeACoffee />
            </Container>
          </Container>
        </ThemeProvider>
      </div>
      </>
    );
  }
}

export default App;
