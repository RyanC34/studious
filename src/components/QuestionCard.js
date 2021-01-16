import React, {useState} from 'react'
import {Fieldset, Button} from "@geist-ui/react"
import {
    BrowserRouter as Router,
    Redirect
 } from "react-router-dom";
export default function QuestionCard(props) {
    const [redirecting, setRedirecting] = useState(false)
    let {
        Title, Description, Score, editButtonHandler
    } = props;

    function goToPractice(){
        setRedirecting(true)
        editButtonHandler()
    }

    return (
        <div>
            <Fieldset>
                <Fieldset.Title>{Title}</Fieldset.Title>
                    <Fieldset.Subtitle>{Description}</Fieldset.Subtitle>
                    <Fieldset.Footer>
                        <Fieldset.Footer.Actions>
                            <Button auto size="mini" onClick = {goToPractice}>practice</Button>
                            <Button auto size="mini">edit</Button>
                        </Fieldset.Footer.Actions>
                    </Fieldset.Footer>
                    {redirecting ? <Redirect to="/practice"/> : null}
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
