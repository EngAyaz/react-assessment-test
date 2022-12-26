const AppReducer = (preState, action) => {
    switch(action.type) {
        case 'USER_AUTHENTICATED':
            return {
                ...preState,
                auth: action.value
            }

        case 'SET_USER':
            return {
                ...preState,
                user: action.value
            }
        case 'ADD_PRODUCT':
            return {
                ...preState,
                checkout: action.value
            }

        case 'REMOVE_PRODUCT':
            return {
                ...preState,
                checkout: action.value
            }

        default: return preState

    }
}
export default AppReducer;