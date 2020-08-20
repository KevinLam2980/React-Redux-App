import React from 'react'
import {NavLink} from 'react-router-dom'
import Styled from 'styled-components'

const StyledHeader = Styled.section`
background: rgba(0, 57, 171, 0.3);
padding: 2rem;
box-shadow: 0 0 10px black;
border-bottom: 2px solid black;
h1 {
    &:hover {
        transform: scale(1.1);
    }
    color: white;
    text-shadow: 3px 3px black;
    font-size: 3rem;
}
a {
    text-decoration: none;
}
`

const navBar = props => {

    return(
        <div>
            <StyledHeader>
                <NavLink to='/'>
                <h1>Cocktails for daez 🍹</h1>
                </NavLink>
            </StyledHeader>

        </div>
    )
}

export default navBar