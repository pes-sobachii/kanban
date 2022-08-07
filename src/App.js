import {TodoBody} from "./Components/Body";
import {Provider} from "react-redux";
import store from "./Redux/react-redux";
import {HashRouter} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <TodoBody/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
