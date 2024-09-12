import React from "react";
import "./ListToDo.scss"
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button'

class ListToDo extends React.Component {
    state = {
        listToDos: [
            { id: "1", title: "Learning ReactJS" },
            { id: "2", title: "Learning English" },
            { id: "3", title: "Doing homework" }
        ],
        editToDo: {}
    }
    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success("Add Successfully!")
    }
    handleDeleteToDo = (todo) => {
        let currentListToDo = this.state.listToDos
        currentListToDo = currentListToDo.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentListToDo
        })
        toast.success("Delete Successfully!")
    }
    handleEditToDo = (todo) => {
        let { editToDo, listToDos } = this.state
        let isEmptyObj = Object.keys(editToDo).length === 0

        //save
        if (isEmptyObj === false && editToDo.id === todo.id) {

            let listToDosCopy = [...listToDos]
            let tempEmptyObj = Object.keys(editToDo).length === 0

            if (tempEmptyObj === true && editToDo.id === todo.id) {
                toast.error("Edit Unsuccessfully!")
                return;
            }
            //Find index of specific object using findIndex method.    
            let objIndex = listToDosCopy.findIndex(item => item.id === todo.id);
            if (tempEmptyObj === true && editToDo.id === todo.id) {
                toast.error("Edit Unsuccessfully!")
                return;
            }
            //Update object's name property.
            listToDosCopy[objIndex].title = editToDo.title

            this.setState({
                listToDos: listToDosCopy,
                editToDo: {} // khi save thành công thì trở lại nút edit
            })
            toast.success("Edit Successfully!")
            return;
        }

        //edit
        this.setState({
            editToDo: todo
        })

    }
    handleOnChangeEditToDo = (event) => {
        let editToDoCopy = { ...this.state.editToDo }
        editToDoCopy.title = event.target.value
        this.setState({
            editToDo: editToDoCopy
        })
    }
    render() {
        let { listToDos, editToDo } = this.state;
        let isEmptyObj = Object.keys(editToDo).length === 0   // rỗng => true

        return (
            <>
                <p>
                    SIMPLE TODO APPS
                </p>
                <div className="list-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo}
                    />
                    <div className="list-todo-content">
                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                            :
                                            <>
                                                {editToDo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editToDo.title}
                                                            onChange={(event) => this.handleOnChangeEditToDo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <Button variant="danger" size="sm" className="button-todo mt-1"
                                            onClick={() => this.handleDeleteToDo(item)}
                                        >Delete</Button>
                                        <Button variant="warning" size="sm" className="button-todo mt-1"
                                            onClick={() => this.handleEditToDo(item)}
                                        >
                                            {isEmptyObj === false && editToDo.id === item.id ? 'Save' : 'Edit'}
                                        </Button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )
    }
}

export default ListToDo