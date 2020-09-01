import React, {useState, useEffect, useContext} from "react";
import ItemList from "../ItemList";
import Api from '../../api/Api'
import HeaderTitle from "../HeaderTitle";
import InputItem from "../InputItem";
import {AppContext} from "../../App";
import {ADD_ITEM, DELETE_ITEM, FETCH_ITEM, FINISH_ITEM, INIT_ITEM} from "../../store/actionTypes";

export default function TodoList() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         size: 0,
    //         inputValue: "",
    //         itemList: []
    //     }
    // }

    //const  [buttonText, setButtonText] =  useState("Click me,   please");
    const [inputValue] = useState('');
    const[itemList, setItemList] = useState([]);
    const { state, dispatch } = useContext(AppContext)

    // componentWillMount() {
    //     this.initTodoList();
    // }

    useEffect(() => {
        initTodoList();
    }, [])

    // handleAddItem = async (inputValue) => {
    //     if (inputValue !== "") {
    //         await Api.addTodo({content: inputValue, status: false})
    //         this.initTodoList();
    //     } else {
    //         alert("No Allow Empty");
    //     }
    // };

    async function handleAddItem(inputValue) {
        if (inputValue !== "") {
            //await Api.addTodo({content: inputValue, status: false})
            dispatch({type: ADD_ITEM, item : {id: 2, content: inputValue, status: false}})
            initTodoList();
        } else {
            alert("No Allow Empty");
        }
    }

    // handleDeleteItem = async (id) => {
    //     await Api.deleteTodo(id);
    //     this.initTodoList();
    // };

     function handleDeleteItem(id) {
        // await Api.deleteTodo(id)
        // console.log('asdasdadasasdasdasdasd')
        dispatch({ type: DELETE_ITEM, index: id});
        initTodoList();
    }

    // handleFinishItem = async (id, status) => {
    //     await Api.updateTodo(id, status);
    //     this.initTodoList();
    // };

    async function handleFinishItem(id, status) {
        //await Api.updateTodo(id, status);
        dispatch({type: FINISH_ITEM, index: id})
        initTodoList();
    }

    // initTodoList = async () => {
    //     let res = await Api.getTodos();
    //     this.setState({
    //         itemList: res.data
    //     });
    //     console.log(this.state.itemList)
    // };

    function initTodoList() {
        // let res = await Api.getTodos();
        // console.log("res+++++++++++", res)
        //return dispatch({type : INIT_ITEM});
        return setItemList(state.itemList);
    }


    return <div>
        <HeaderTitle title={"To Do List"}/>
        <InputItem onAdd={handleAddItem}/>
        <ItemList items={itemList} onDelete={handleDeleteItem} onFinish={handleFinishItem}/>
    </div>

}

export {TodoList};
