import React from 'react'
import TempCards from "../data/tempCards";
import QuestionCard from '../components/QuestionCard'
import '../App.css';
import { Grid } from '@geist-ui/react';
import CreateButton from "../components/CreateButton"
function QuestionCardPage() {
    return (
        <div>
            <CreateButton/>
            
            <Grid.Container gap={2} justify = "center">
                {TempCards.map(card => (
                    <Grid>
                        <QuestionCard Title={card.title} Description={card.description} />
                    </Grid>
                )
                )}
            </Grid.Container>
        </div>
      
    )
}

export default QuestionCardPage
