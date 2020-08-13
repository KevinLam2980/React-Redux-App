import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { cocktailRecipes, searchCocktail } from '../store/actions/cocktailActions'
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
    box-shadow: 0 0 10px black;
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
h3 {
    margin: 1rem;
    color: white;
    text-shadow: 3px 3px black;
    font-size: 1.4rem;
}
p {
    margin-bottom: 1rem;
    color: white;
    text-shadow: 3px 3px black;
    font-size: 1rem;
}
li {
    color: white;
    text-shadow: 3px 3px black;
    font-size: 1rem;
}

`

const CocktailList = props => {
    const [searchValue, setSearchValue] = useState('')
        useEffect(() => {
           props.cocktailRecipes()
        }, [])
    return (
        <StyledSection>
                <h2>Everyday is a good day for a cocktail</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.searchCocktail(searchValue)}}>
                <input
                type='text'
                placeholder='Search a drink'
                value={searchValue}
                onChange={evt => {setSearchValue(evt.target.value)}}
                ></input>
                
                <button>submit</button>
                </form>
                  {props.cocktails.length > 0 ? (<div>
                    {props.cocktails.map((ct) => (
                    (
                        <div className='card' id={ct.idDrink}>
                            <img src={ct.strDrinkThumb}></img>
                            <h3>{ct.strDrink}</h3>
                            <p>Category: {ct.strCategory}</p>
                            <ol>
                                {ct.strIngredient1 ? <li>{ct.strMeasure1} - {ct.strIngredient1}</li> : null}
                                {ct.strIngredient2 ? <li>{ct.strMeasure2} - {ct.strIngredient2}</li> : null}
                                {ct.strIngredient3 ? <li>{ct.strMeasure3} - {ct.strIngredient3}</li> : null}
                                {ct.strIngredient4 ? <li>{ct.strMeasure4} - {ct.strIngredient4}</li> : null}
                                {ct.strIngredient5 ? <li>{ct.strMeasure5} - {ct.strIngredient5}</li> : null}
                                {ct.strIngredient6 ? <li>{ct.strMeasure6} - {ct.strIngredient6}</li> : null}
                                {ct.strIngredient7 ? <li>{ct.strMeasure7} - {ct.strIngredient7}</li> : null}
                                {ct.strIngredient8 ? <li>{ct.strMeasure8} - {ct.strIngredient8}</li> : null}
                            </ol>
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

export default connect(mapStateToProps, {cocktailRecipes, searchCocktail})(CocktailList)