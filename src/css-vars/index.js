import * as React from 'react'
import './vars.css'
import styled from '@emotion/styled' // yarn add @emotion/react @emotion/styled

const Heading1 = styled.h1({
    color: 'var(--bn-success)',
    textAlign: 'center'
},
    props => ({
        fontsize: props.fontsize
    })

)

const PrimaryText = styled.div({
    padding: 20,
    fontsize: 24,
    borderRadius: 4,
    color: 'var(--colors-primary)',
    backgroundColor: 'var(--colors-background)',

})



function ThemeToggler() {
    const [theme, setTheme] = React.useState('light')
    const nextTheme = theme === 'light' ? 'dark' : 'light'

    React.useEffect(() => {
        document.body.dataset.theme = theme
    }, [theme])

    return (
        <button onClick={() => setTheme(nextTheme)}>
            Switch to {nextTheme} mode
        </button>
    )

}

function App() {
    return (
        <div>
            <Heading1>How to successfully add a dark theme <br /> to a react component</Heading1>
            <PrimaryText id='dark-demo'>This is our primary color</PrimaryText>
            <ThemeToggler />
        </div>
    )

}

export default App