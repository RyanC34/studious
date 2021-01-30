import React, {useState} from 'react'
import {Fieldset, Button} from "@geist-ui/react"
import {
    BrowserRouter as Router,
    Redirect
 } from "react-router-dom";
export default function QuestionCard(props) {
    const [redirectingToPractice, setRedirectingToPractice] = useState(false)
    const [redirectingToEdit, setRedirectingToEdit] = useState(false)
    let {
        Title, Description, Score, practiceButtonHandler, editButtonHandler
    } = props;

    function goToPractice(){
        setRedirectingToPractice(true)
        practiceButtonHandler()
    }


    return (
        <div>
            <Fieldset>
                <Fieldset.Title>{Title}</Fieldset.Title>
                    <Fieldset.Subtitle>{Description}</Fieldset.Subtitle>
                    <Fieldset.Footer>
                        <Fieldset.Footer.Actions>
                            <Button auto size="mini" onClick = {goToPractice}>practice</Button>
                            <Button auto size="mini" onClick = {() => {
                                setRedirectingToEdit(true)
                                editButtonHandler()
                                }}>edit</Button>
                        </Fieldset.Footer.Actions>
                    </Fieldset.Footer>
                    {redirectingToPractice ? <Redirect to="/practice"/> : null}
                    {redirectingToEdit ? <Redirect to="/edit"/> : null}
                    {/*
                        ternary operator (?)

                        if (redirecting == true) {
                            return <Redirect to="/practice" />
                        } else {
                            return null
                        }
                    */}
            </Fieldset>
        </div>
    )
}
