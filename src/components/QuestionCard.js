import React from 'react'
import {Fieldset, Button} from "@geist-ui/react"

export default function QuestionCard(props) {
    let {
        Title, Description, Score
    } = props;

    return (
        <div>
            <Fieldset>
                <Fieldset.Title>{Title}</Fieldset.Title>
                    <Fieldset.Subtitle>{Description}</Fieldset.Subtitle>
                    <Fieldset.Footer>
                    <Fieldset.Footer.Actions>
                        <Button auto size="mini">practice</Button>
                        <Button auto size="mini">edit</Button>
                    </Fieldset.Footer.Actions>
                </Fieldset.Footer>
            </Fieldset>
        </div>
    )
}
