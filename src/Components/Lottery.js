import React, { Component } from 'react'
import LotteryTicket from './LotteryTicket';

class Lottery extends Component {
  renderButton() {
    const { remainingTickets, actions } = this.props;

    if (remainingTickets > 0) {
      return <button onClick={ actions.registerTicket } >Buy Ticket</button>;
    }
  }

  renderTickets() {
    const { tickets, actions  } = this.props;
    const lotteryTicketActions = { removeTicket: actions.removeTicket };

    const lotteryTickets = tickets.map( ( ticket, index ) => {
      return (
        <LotteryTicket
          actions={lotteryTicketActions}
          color={ticket.color}
          number={ticket.number}
          index={index}
          key={index}
        />
      );
    });

    return lotteryTickets;

  }

  render() {
    return (
      <>
        <h2>Lottery</h2>
        { this.renderButton() }
        <br />
        <small>remaining: {this.props.remainingTickets}</small>
        <br/>
        <hr/>
        { this.renderTickets() }
      </>
    );
  }
}

export default Lottery;
