import React, { Component } from 'react';
import Lottery from './Components/Lottery';
import { getRandomNumber } from './Helper/utils';
import { registerTicket, removeTicket } from './Helper/actions';

import './App.css';

class App extends Component {
    constructor( props ) {
      super( props );

      this.state = {
        winningNumber    : getRandomNumber(),
        tickets          : [],
        remainingTickets : 7,
        finished         : false
      };

      this.registerTicket = registerTicket.bind( this );
      this.removeTicket = removeTicket.bind( this );
    }

    renderApp() {
      const {tickets, remainingTickets} = this.state;
      const actions = {};

      actions.registerTicket = this.registerTicket;
      actions.removeTicket = this.removeTicket;

      return (
        <Lottery
            actions          = { actions }
            tickets          = { tickets }
            remainingTickets = { remainingTickets }
        />
      );
    }

    render() {
      return(
      <div className='App'>
        { this.renderApp() }    
      </div>
    );
  }
}

export default App;
