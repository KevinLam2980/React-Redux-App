import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {cocktailRecipes} from '../store/actions/cocktailActions'
import CocktailList from './cocktailList'
import Loader from 'react-loader-spinner'
import Styled from 'styled-components'

const StyledHeader = Styled.section`
background: rgba(0, 57, 171, 0.3);
padding: 2rem;
box-shadow: 0 0 10px black;
border-bottom: 2px solid black;
h1 {
    color: white;
    text-shadow: 3px 3px black;
    font-size: 3rem;
}
`
const StyledSection = Styled.section`
display: flex;
flex-direction: column;
border: 2px solid black;
border-radius: 10px;
margin: 2rem auto;
max-width: 1200px;
box-shadow: 0 0 10px black;
#{
    margin: 0 auto;
}
`
const Cocktails = props => {
    useEffect(() => {
        props.cocktailRecipes()
    }, [])

    return (
        <div>
            <StyledHeader>
                <h1>Cocktails for daez 🍹</h1>
            </StyledHeader>
            <StyledSection>
                {props.errors ? <h2>There be errors doe - {props.errors}</h2> : null}
                <CocktailList />
                {props.isLoading ?  <Loader
                                        id='customLoader'
                                        type="ThreeDots"
                                        color="#fc88a8"
                                        height={300}
                                        width={300}
                                        timeout={3000} //3 secs

                                    /> : null}
                
            </StyledSection>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cocktails: state.cocktails,
        isLoading: state.isLoading,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {cocktailRecipes})(Cocktails)