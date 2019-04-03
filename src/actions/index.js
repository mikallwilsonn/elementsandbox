// ----
// HTMental Actions


// Set Current Element
export const setCurrentElement = ( value ) => dispatch => {
    dispatch({ type: 'set_current_element', payload: value });
}