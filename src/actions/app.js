export function toggleClick() {
    return (dispatch ) => {
        console.log('action fired')
        return dispatch({
            type: 'APP_TOGGLE_CLICK',
        })
    }
}
