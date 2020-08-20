import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { searchCocktailById } from '../store/actions/cocktailActions'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Styled from 'styled-components'

const StyledDiv = Styled.div`
border: 2px solid black;
border-radius: 15px;
box-shadow: 0 0 10px black;
padding: 2rem;
width: 75%;
max-width: 1000px;
margin: 5vh auto;
color: white;
text-shadow: 2px 2px black;
background: rgba(0, 57, 171, 0.3);

img {
    width: 80%%;
    max-height: 600px;
    object-fit: cover;
    object-position: center;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
}
ol {
    margin: 1rem;
}
li {
    margin:0 0 0 30px;
}
h2 {
    margin: 1.5rem;
    font-size: 2rem;
}
p {
    margin: 1rem;
}
.instructions {
    text-transform: capitalize;
}
`


const Drink = props => {
    let {drinkID} = useParams()

    useEffect(() => {
        props.searchCocktailById(drinkID)
    }, [])

    return (
        <div>
            {props.isLoading ?  <Loader
                                        id='customLoader'
                                        type="ThreeDots"
                                        color="#fc88a8"
                                        height={300}
                                        width={300}
                                        timeout={3000} //3 secs

                                    /> : null}
            {!props.isLoading ? (
                <div>
                    {
                        props.cocktails.map(ct => {
                            return( 
                            <StyledDiv> 
                                <img src={ct.strDrinkThumb}></img>
                                <h2>{ct.strDrink}</h2>
                                <p>Category: {ct.strCategory}</p>
                                {ct.strAlcoholic ? <p>{ct.strAlcoholic}</p> : null}
                                <p>Instructions</p>
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
                                {ct.strInstructions ? <p className='instructions'>{ct.strInstructions}</p> : null}
                                {ct.strGlass ? <p>Best served in a {ct.strGlass}</p> : null}
                            </StyledDiv>)
                        })
                    }
                </div>
            ) : null}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cocktails: state.cocktails,
        erros: state.errors,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {searchCocktailById})(Drink)