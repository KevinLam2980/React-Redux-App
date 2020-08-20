import React from 'react'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
box-shadow: 0 0 10px black;
border-top: 2px solid black;
color: white;
background: rgba(0, 57, 171, 0.3);

p{
    padding: 2.5rem;
    text-shadow: 3px 3px black;
}
`

const Footer = () => {

    return (
        <StyledDiv>
            <p>Drink responsibly to drink another day</p>
        </StyledDiv>
    )
}

export default Footer 

