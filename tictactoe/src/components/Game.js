import React, { Component } from 'react'
import Board from './Board';
import PopUp from './Popup';

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnOfX: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
]}}

handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winner = whoWins(squares);
    if (winner || squares[i]) {
        return;
    }
    squares[i] = this.state.turnOfX ? 'X' : 'O';
    this.setState({
        history: history.concat({
            squares: squares
        }),
        turnOfX: !this.state.turnOfX,
        stepNumber: history.length
})}

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];


        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>

            </div>
)}}

function whoWins(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a] , PopUp ;
        }
    }
return ;
}