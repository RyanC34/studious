import React, {useState, useEffect} from 'react'
import TempCards from "../data/tempCards.json";
import {Text, Collapse, Textarea, Slider} from "@geist-ui/react"


function EditPage(props) {
    const [questionData, setQuestionData] = useState()
    const [question, setQuestion] = useState()
    const [difficulty, setDifficulty] = useState()
    const [answer, setAnswer] = useState()

    let {
        cardTitle,
        cardDesc,
        id
    } = props

    useEffect(() => {
        let questions = findCardWithID();
        setQuestionData(questions);
    }, [findCardWithID]);

    function findCardWithID() {
        for (var card of TempCards) {
            if (card.id === id){
                return card.questions ? card.questions : null
            }
        }
    }
    function valueOfTargetQuestions(event){
        setQuestion(event.target.value)
    }
    function valueOfTargetDifficulty(event){
        setDifficulty(event.target.value)
    }
    function valueOfTargetAnswer(event){
        setAnswer(event.target.value)

    }

    return (
        <div>
            <Text h1>{cardTitle}</Text>
            <Text h4>{cardDesc}</Text>
            <Collapse.Group>
            {
                questionData ? questionData.map(question => (
                    <Collapse title="Question" >
                        <Textarea onChange = {valueOfTargetQuestions} className = "Collapse" value={question.question}/>
                        <Textarea onChange = {valueOfTargetQuestions} className = "Collapse" value={question.answer}/>
                        <Slider onChange = {valueOfTargetQuestions} className = "Collapse" initialValue = {question.difficulty}/>
                    </Collapse>
                )) : null
            }
            </Collapse.Group>

        </div>
    )
}

export default EditPage
