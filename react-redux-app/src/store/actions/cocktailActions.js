import axios from 'axios'
import { reducer } from '..'

export const FETCHING_COCTAILS_START = 'FETCHING_COCTAILS_START'
export const FETCH_COCTAILS_SUCCESS = 'FETCH_COCTAILS_SUCCESS'

export const cocktailRecipes = () => (dispatch) => {
    console.log('hello')
    dispatch({type: FETCHING_COCTAILS_START })
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => {
        console.log(res.data.drinks)
        dispatch({type:FETCH_COCTAILS_SUCCESS, payload: res.data.drinks})
    })
    .catch(err => {
        console.log(err)
    })
}