const initState = {
    posts: [
        {id: '1', title: 'Leg and egg', body: 'We have to roast the chicken first'},
        {id: '2', title: 'chicken in the kitchen', body: 'Sometimes need salt to get some kinda taste for the chicken'},
        {id: '3', title: 'Waterfall', body: 'Water coming out from the bathroom'}
    ]
}


const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;