import React from "react";
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button'

class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddToDo = () => {
        if (!this.state.title) {
            toast.error('Missing Title!')
            return;
            // if (undefined/null/empty) => false

        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewToDo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <Button type="button" className="btn-add mb-1"
                    onClick={() => this.handleAddToDo()}
                >Add</Button>

            </div>
        )
    }
}

export default AddToDo