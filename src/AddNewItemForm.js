import React from 'react';
import {connect} from "react-redux"

class AddNewItemForm extends React.Component {
    constructor() {
        super();
    }

    state = {
        error: false,
        title: ""
    }

    deleteTask = () => {
        this.props.deleteTodoList(this.props.id)
    }


    onAddItemClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ""});
        if (newTitle === "") {
            this.setState({error: true});
        } else {
            this.setState({error: false});
            this.props.addItem(newTitle);
        }
    }

    onTitleChanged = (e) => {
        this.props.setText(e.currentTarget.value)
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    onKeyPress = (e) => {
        if(e.key === "Enter") {
            this.onAddItemClick();
        }
    }

    render = () => {
        let classForInput = this.state.error ? "error" : "";
        return (
         
                <div className={"todoList-newTaskForm" + " " + "titile-newTaskForm"}>
                    <input type="text"
                           onKeyPress={this.onKeyPress}
                        placeholder="New task name"
                           onChange={this.onTitleChanged}
                           className={classForInput}
                           value={this.state.title}
                         />
                    <button onClick={this.onAddItemClick} className="btnNewTaskForm">Add</button>
                </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newTextFromItemForm: state.newTextFromItemForm
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        setText: (text) => {
            const action = {
                type: "SET-NEW-TEXT",
                text
            };
            dispatch(action)
        }
    }
}
const ConnectedAddNewItemForm = connect(mapStateToProps,  mapDispatchToprops)(AddNewItemForm);
export default ConnectedAddNewItemForm;


