import {FETCHING_COCTAILS_START, FETCH_COCTAILS_SUCCESS, FETCH_COCTAILS_FAILURE} from '../actions/cocktailActions'

const initialState = {
    cocktails: [],
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
        case FETCH_COCTAILS_FAILURE:
            return {
              ...state,
              isLoading: false,
              errors: action.payload,
              cocktails: []
            };
      default:
        return state;
    }
  };