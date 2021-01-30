import React, {useState} from 'react'
import {useTheme, Button, useModal, Modal, Input, Text, Textarea, Spacer} from '@geist-ui/react'
export default function CreateButton() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const {palette} = useTheme()
    const { visible, setVisible, bindings } = useModal()

    const buttonStyle = {
        background: palette.cyanLight
    }

    // function titleInputHandler() {}
    const titleInputHandler = (e) => {
        // e = event
        setTitle(e.target.value)
    }

    const descriptionInputHandler = (event) => {
        setDescription(event.target.value)
    }

    return (
        <div className= "CreateButton">
            <Button style={buttonStyle} auto onClick={() => setVisible(true)}>Create new question set</Button>
            <Modal {...bindings}>
        <Modal.Title>Create New Question Set</Modal.Title>
        <Modal.Subtitle>What's the answer to the universe?</Modal.Subtitle>
        <Modal.Content>
          <Input placeholder="eg. Math" onChange={titleInputHandler}>
              <Text h5>Title</Text>
          </Input>
          <Spacer y ={1}></Spacer>
          <Text h5>Description</Text>
          <Textarea placeholder = "eg. Angles, just use a protractor" onChange={descriptionInputHandler}/>
        </Modal.Content>
        <Modal.Action passive onClick={() => setVisible(false)}>Cancel</Modal.Action>
        <Modal.Action onClick={() => {
            console.log(title)
            console.log(description)
        }}>Submit</Modal.Action>
      </Modal>
        </div>
    )
}