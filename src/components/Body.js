import React from 'react'
import CreateButton from './CreateButton'
import QuestionCardPage from '../pages/QuestionCardPage'
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
 } from "react-router-dom";



export default function Body() {
    let componentSelect = 1; // manually change in code (for development)
    let displayComponent;

    

    if (componentSelect === 0) {
        displayComponent = <CreateButton />
    } else if (componentSelect === 1) {
        displayComponent = <QuestionCardPage/>
    }

    return (
        <div className="Body">
            {displayComponent}
        </div>
    )
}
