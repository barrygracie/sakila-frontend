import React, { useState } from 'react';

export default function Sidenav(){
    return(
        <div class="sidenav">
        <h2>Select Game</h2>
        <a href="#one">Guess the Actor</a>
        <a href="#two">Guess The Film</a>
        <a href="#three">Guess The Description</a>
        <a href="#four">Guess the Country</a>
        <a href="#five">Actor Battle</a>
        </div>
    );
}