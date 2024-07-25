import React, { Component } from 'react'
import { getRandomColor } from '../Helper/utils';
import { Button, Card } from 'antd';

class Final extends Component {
  isWinning() {
    const { tickets, winningNumber } = this.props;

    for (const ticket of tickets) {
      if (ticket.number === winningNumber) {
        return true;
      }
    }

    return false;

  }

  renderWinning() {
    return (
      <>
        <h2>Congratulations!!!</h2>
        <h3>You have won 1 Million USD</h3>
        <p>Your winning number is: <b>{this.props.winningNumber}</b> </p>
      </>
    )
  }

  renderTryAgain() {
    return (
      <>
        <h2>Try Again!</h2>
        <p>The winning number was: <b>{this.props.winningNumber}</b> </p>
      </>
    )
  }

  render() {
    return (
      <Card
        style={{ backgroundColor: getRandomColor() }}
        title={this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
      >

        <Button block onClick={this.props.actions.reset} >New Withdrawal</Button>
      </Card>
    );
  }
}

export default Final;
