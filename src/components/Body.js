import React from 'react'
import CreateButton from './CreateButton'
import QuestionCard from './QuestionCard'
import '../App.css';

export default function Body() {
    let componentSelect = 1; // manually change in code (for development)
    let displayComponent;

    if (componentSelect === 0) {
        displayComponent = <CreateButton />
    } else if (componentSelect === 1) {
        displayComponent = <QuestionCard />
    }

    return (
        <div className="Body">
            {displayComponent}
        </div>
    )
}
