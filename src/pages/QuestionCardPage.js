import React, {useState} from 'react'
import TempCards from "../data/tempCards";
import QuestionCard from '../components/QuestionCard'
import '../App.css';
import { Grid } from '@geist-ui/react';

function QuestionCardPage(props) {
    let {
        changeSelectedCard,
        changeSelectedCardDesc,
        changeId
    } = props

    return (
        <div>
            
            <Grid.Container gap={2} justify = "center">
                {TempCards.map(card => (
                        <Grid>
                            <QuestionCard Title={card.title} Description={card.description} editButtonHandler = {() => {
                                changeSelectedCard(card.title)
                                changeSelectedCardDesc(card.description)
                                changeId(card.id)
                            }} 
                            practiceButtonHandler={() => {
                                changeSelectedCard(card.title)
                                changeSelectedCardDesc(card.description)
                                changeId(card.id)
                            }}/>
                        </Grid>
                    )
                )}
            </Grid.Container>

        </div>
      
    )
}

export default QuestionCardPage
