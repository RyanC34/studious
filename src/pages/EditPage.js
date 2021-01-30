import React from 'react'
import {Text} from "@geist-ui/react"
function EditPage(props) {
    let {
        cardTitle,
        cardDesc
    } = props

    return (
        <div>
            <Text h1>{cardTitle}</Text>
            <Text h4>{cardDesc}</Text>
        </div>
    )
}

export default EditPage
