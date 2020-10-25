import React from 'react'
import {Fieldset, Button} from "@geist-ui/react"
export default function QuestionCard() {
    return (
        <div>
            <Fieldset>
                <Fieldset.Title>Math</Fieldset.Title>
                    <Fieldset.Subtitle>test on integers, exponents, prime factorization, Bedmas </Fieldset.Subtitle>
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
