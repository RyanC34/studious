import React from 'react'
import '../App.css'
import {Text, useTheme, Button} from '@geist-ui/react'
export default function Header() {
    const {palette} = useTheme()
    return (
        <div className='Header'>
            <Text>Studious</Text>
            <Button style={{background: palette.successLight}}>Login</Button>
        </div>
    )
}
