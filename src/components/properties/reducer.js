import * as types from './constant'

export function properties(state = {}, action) {
    switch (action.type) {
        case types.GET_ALL_PROPERTIES:
            return Object.assign({}, state,
                [
                    {id: 123, name: 'abc'},
                    {id: 456, name: 'def'}
                ]
            );
        default:
            return state
    }
}