import React from 'react'
import CreateButton from './CreateButton'
import QuestionCard from './QuestionCard'
import '../App.css';
import TempCards from "../data/tempCards";

export default function Body() {
    let componentSelect = 1; // manually change in code (for development)
    let displayComponent;

    console.log(TempCards);

    if (componentSelect === 0) {
        displayComponent = <CreateButton />
    } else if (componentSelect === 1) {
        displayComponent = <div>
            {TempCards.map(card => (<QuestionCard Title={card.title} Description={card.description} />)
            )}
        </div>;
    }

    return (
        <div className="Body">
            {displayComponent}
        </div>
    )
}
