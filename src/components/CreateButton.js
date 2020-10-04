import React from 'react'
import {useTheme, Button} from '@geist-ui/react'

export default function CreateButton() {
    const {palette} = useTheme()

    const buttonStyle = {
        background: palette.cyanLight
    }

    return (
        <div>
            <Button style={buttonStyle}>Create new question set</Button>
        </div>
    )
}