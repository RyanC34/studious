import React from 'react'
import '../App.css'
import CreateButton from "../components/CreateButton"
import {
    BrowserRouter as Router,
    Link,
 } from "react-router-dom";
import {Text, useTheme, Button} from '@geist-ui/react'
export default function Header() {
    const {palette} = useTheme()
    return (
        <div className='Header'>
            <Text>
                <Link to="/" className="logoLink">Studious</Link>
            </Text>
            <CreateButton/>
            <Button  style={{background: palette.successLight}}>Login</Button>
        </div>
    )
}
