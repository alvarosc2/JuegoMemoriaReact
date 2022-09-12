import { Component } from "react";


class PlayArea extends Component {
    render() {
        return <div className="container">
        <div className="row">
          <div className="col">
              <Card face={shuffledDeck[0]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[1]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[2]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[3]} />
          </div>
        </div>
      
        <div className="row">
          <div className="col">
              <Card face={shuffledDeck[4]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[5]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[6]} />
          </div>
          <div className="col">
              <Card face={shuffledDeck[7]} />
          </div>
        </div>
      </div>
    }
}