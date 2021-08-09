import axios from "axios";

export const FETCH_DATA_POST = () => {
    return (dispatch) => {
        // *  dispatch(MethodLoadingTrue)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                console.log(users)
                // *  dispatch(MethodSuccess)
            })
            .catch(error => {
                const errorMsg = error.message
                // *  dispatch(MethodError)
            })
    }
}
