import {FETCHING_COCTAILS_START, FETCH_COCTAILS_SUCCESS} from '../actions/cocktailActions'

const initialState = {
    cocktails:  [],
    loading: false,
    errors: ''
}

export const cocktailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_COCTAILS_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case FETCH_COCTAILS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          cocktails: action.payload
        };
      default:
        return state;
    }
  };