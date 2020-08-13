import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { cocktailRecipes } from '../store/actions/cocktailActions'
import Styled from 'styled-components'

const StyledSection = Styled.section`
/* display: flex; */
div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.card {
    width: 30%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid black;
    border-radius: 10px;
    margin: 20px 10px;
    background: rgba(0, 57, 171, 0.3);
}
img{
    width: 100%;
    border-radius: 10px
}
h2 {
    margin: 3rem;
    color: white;
    text-shadow: 3px 3px black;
    font-size: 2rem;
}
`

const CocktailList = props => {
    useEffect(() => {
        props.cocktailRecipes()
    }, [])
    
    return (
        <StyledSection>
                <h2>Everyday is a good day for a margarita</h2>
                  {props.cocktails.length > 0 ? (<div>
                    {props.cocktails.map((ct) => (
                    (
                        <div className='card' id={ct.idDrink}>
                            <img src={ct.strDrinkThumb}></img>
                            <h2>{ct.strDrink}</h2>
                            {/* <p>Category: {ct.strCategory}</p> */}
                        </div>
                    )
                 ) )}
                </div>) : null}
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        cocktails: state.cocktails
    }
}

export default connect(mapStateToProps, {cocktailRecipes})(CocktailList)