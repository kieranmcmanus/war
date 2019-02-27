import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

  if (instructionsExpanded) {
    return (
      <div>
        <h3>Instructions</h3>
        <p>War...war never changes.  The game goes like this</p>
        <p>
          Each player turns up a card at the same time and the player with the higher
          card takes both cards and puts them, face down, on the bottom of his stack.
        </p>
        <p>
          If the cards are the same rank, it is War. Each player turns up one card face
          down and one card face up. The player with the higher cards takes both piles (six cards).
          If the turned-up cards are again the same rank, each player places another card face
          down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
        </p>
        <p>The game ends when one player has won all the cards.</p>
        <br />
        <button onClick={collapseInstructions}>Show less</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Instructions</h3>
      <p>War...war never changes.  The game goes like this...</p>
      <button onClick={expandInstructions}>Read more</button>
    </div>
  )
}

export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
  )(Instructions);
