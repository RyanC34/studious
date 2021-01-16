import React, {useState} from 'react'
import TempCards from "../data/tempCards";
import QuestionCard from '../components/QuestionCard'
import '../App.css';
import { Grid } from '@geist-ui/react';
import CreateButton from "../components/CreateButton"
function QuestionCardPage() {
    // state that tracks the title of card has been clicked
    const[clickedTitle, setClickedTitle] = useState("")
    
    return (
        <div>
            <CreateButton/>
            
            <Grid.Container gap={2} justify = "center">
                {TempCards.map(card => (
                        <Grid>
                            <QuestionCard Title={card.title} Description={card.description} editButtonHandler={() => {
                                setClickedTitle(card.title)
                            }}/>
                        </Grid>
                    )
                )}
            </Grid.Container>
        </div>
      
    )
}

export default QuestionCardPage
