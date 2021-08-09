import Header from "./Components/Header/Header";
import Post from "./Components/Post/Post";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Header/>
                <Post/>
            </Provider>
        </div>
    );
}

export default App;
