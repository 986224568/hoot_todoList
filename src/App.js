import React, {useReducer} from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import MarkedTodoList from "./component/MarkedTodoList";
import {HashRouter, Route} from 'react-router-dom';
import TopMenu from "./component/TopMenu";
import 'antd/dist/antd.css';
import {Spin} from 'antd'
import {connect} from "react-redux";
import reducer from "./store/reducer/reducer";



const AppContext = React.createContext({});

function App() {
    const [state, dispatch] = useReducer(reducer, {itemList: [{"id":"204","content":"1113","status":false}]});
    return (
        <AppContext.Provider value={{
            state: state,
            dispatch: dispatch
        }}>

                <div className="App">
                    <HashRouter>
                        <TopMenu/>
                        <Route exact path="/" component={TodoList}/>
                        <Route path="/finish" component={MarkedTodoList}/>
                    </HashRouter>
                </div>

        </AppContext.Provider>
    );

}

const mapStateToProps = state => {
    return {loading: state.loadingReducer.loading}
};


export default connect(mapStateToProps, null)(App);
export {AppContext};
