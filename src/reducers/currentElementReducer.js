export default function( state = null, action ) {
    switch ( action.type ) {
        case 'set_current_element':
            return action.payload;
        default:
            return state;
    }
}