import React, { Fragment } from 'react'
import Game from './Game'

export default function Presentation() {
    return (
        <Fragment>
            <h1 id="header">
                Tic-Tac-Toe
            </h1>
            <h3>Analyse the board once it jams to see who won</h3>
            <Game/>
        </Fragment>
    )
}

