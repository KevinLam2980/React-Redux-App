import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {cocktailRecipes} from '../store/actions/cocktailActions'
import CocktailList from './cocktailList'
import Loader from 'react-loader-spinner'
import Styled from 'styled-components'


const StyledSection = Styled.section`
display: flex;
flex-direction: column;
border: 2px solid black;
border-radius: 10px;
margin: 2rem auto;
max-width: 1200px;
box-shadow: 0 0 10px black;
#customLoader{
    margin: 0 auto;
}
`
const Cocktails = props => {
    useEffect(() => {
        props.cocktailRecipes()
    }, [])

    return (
        <div>
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