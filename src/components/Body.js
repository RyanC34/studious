import React, { useState } from 'react'
import CreateButton from './CreateButton'
import QuestionCardPage from '../pages/QuestionCardPage'
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
 } from "react-router-dom";
import PracticePage from '../pages/PracticePage';





export default function Body() {
    let componentSelect = 1; // manually change in code (for development)
    let displayComponent;
    const [selectedTitle, setSelectedTitle] = useState("")

    if (componentSelect === 0) {
        displayComponent = <CreateButton />
    } else if (componentSelect === 1) {
        displayComponent = <QuestionCardPage/>
    }

    return (
        <div className="Body">
            <Switch>
                <Route path="/practice">
                    <PracticePage cardTitle={selectedTitle}/>
                </Route>
                <Route path="/">
                    <QuestionCardPage changeSelectedCard={(cardTitle) => {
                        setSelectedTitle(cardTitle)
                    }}/>
                </Route>
            </Switch>
        </div>
    )
}
