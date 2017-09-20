import {
    toggleClick
} from '../actions/app';

const initialState = {
    clicked: false
};

export default function app(state = initialState, action) {
    console.log('reducer fired')
    switch (action.type) {
        case 'APP_TOGGLE_CLICK':
            return {
                ...state,
                clicked: action.clicked
            }
        default:
            return state
    }
}
