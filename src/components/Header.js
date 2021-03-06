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


/*
function Parent() {
    const [randomState, setRandomState] = useState(0)

    return (
        <div>
            <Child importantNumber={randomState}/>
            <Grandchild importantNumber={randomState} />
            <Nephew importantNumber={randomState} />
        </div>
    )
}
----------------another page------------------
function Child(props) {
    return (
        <Text h1>{props.importantNumber}</Text>
    )
}

function Grandchild(props) {
    let {
        importantNumber
    } = props;

    return (
        <Link>{importantNumber}</Link>
    )
}

function Nephew({ importantNumber }) {
    return (
        <Text h1>{importantNumber}</Text>
    )
}
*/