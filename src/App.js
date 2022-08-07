import {TodoBody} from "./Components/Body";
import {Provider} from "react-redux";
import store from "./Redux/react-redux";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <TodoBody/>
            </Provider>
        </div>
    );
}

export default App;
