import React, {useState} from 'react'
import TempCards from "../data/tempCards";
import {Text, Collapse, Textarea, Slider} from "@geist-ui/react"
function EditPage(props) {
    const [questionData, setQuestionData] = useState() 

    let {
        cardTitle,
        cardDesc,
        id
    } = props

    function findCardWithID() {
        for (card in TempCards) {
            if (card.id === id){
                return card.questions
            }
        }
        return null
    }

    return (
        <div>
            <Text h1>{cardTitle}</Text>
            <Text h4>{cardDesc}</Text>
            <Collapse.Group>
            {
                questionData.map(question => (
                    <Collapse title="Question">
                        <Textarea value={question.question}/>
                        <Textarea value={question.answer}/>
                        <Slider initialValue = {question.difficulty}/>
                    </Collapse>
                ))
            }
            </Collapse.Group>

        </div>
    )
}

export default EditPage
