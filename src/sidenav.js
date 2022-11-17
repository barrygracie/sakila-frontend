import React, { useState } from 'react';

export default function Sidenav(){
    return(
        <div className="sidenav">
        <h2>Contents</h2>
        <a href="#one">Film Title Quiz</a>
        <a href="#two">Description Quiz</a>
        <a href="#three">Geography Quiz</a>
        </div>
    );
}