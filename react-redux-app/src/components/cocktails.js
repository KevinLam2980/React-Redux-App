import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {cocktailRecipes} from '../store/actions/cocktailActions'

const Cocktails = props => {
    useEffect(() => {
        props.cocktailRecipes()
    }, [])

    return (
        <div>
            <section>
                <h1>Cocktails for daez 🍹</h1>
            </section>
            <section>
                {props.isLoading ? <h2>I be loading still tho</h2> : null}
                {props.errors ? <h2>There be errors doe</h2> : null}
                {props.cocktails.length > 0 ? (<div>
                    {props.cocktails.map((ct) => (
                    (<p>{ct.strDrink}</p>)
                 ) )}
                </div>) : null}
            </section>
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