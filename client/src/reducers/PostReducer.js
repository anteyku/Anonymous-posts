const initialState = {
    addPost: false,
    error: false,
    loading: null,
    auth: false,
    ban: false, //? may be future
    posts: [
        {
            name: 'Banan',
            date: '21241241',
            text: 'more text',
        }
    ]
     //? may be future
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_POST':
            return {...state, addPost: true}
        default:
            return state
    }
}
export default postReducer