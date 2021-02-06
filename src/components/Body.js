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
import EditPage from '../pages/EditPage';





export default function Body() {
    let componentSelect = 1; // manually change in code (for development)
    let displayComponent;
    const [selectedTitle, setSelectedTitle] = useState("")
    const [selectedDesc, setSelectedDesc] = useState("")
    const [id, setId] = useState(0)

    if (componentSelect === 0) {
        displayComponent = <CreateButton />
    } else if (componentSelect === 1) {
        displayComponent = <QuestionCardPage/>
    }

    return (
        <div className="Body">
            <Switch>
                <Route path="/practice">
                    <PracticePage cardTitle={selectedTitle} cardDesc={selectedDesc}/>
                </Route>
                <Route path="/edit">
                    <EditPage cardTitle={selectedTitle} cardDesc={selectedDesc} id={id}/>
                </Route>
                <Route path="/">
                    <QuestionCardPage 
                    changeSelectedCard={(cardTitle) => {
                        setSelectedTitle(cardTitle)
                    }}
                    changeSelectedCardDesc={(cardDesc) => {
                        setSelectedDesc(cardDesc)
                    }}
                    changeId={(id) => {
                        setId(id)
                    }}
                    />

                </Route>
            </Switch>
        </div>
    )
}
