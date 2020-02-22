import React, {ChangeEvent} from 'react';


interface IState {
    title: string;
    error: boolean;
}

interface IProps {
    addItem: (value: string) => void;
    setText?: (value: string) => void;
    deleteTask?: (value: string) => void;
}


// interface IMapDispatchProps {
//     setText: () => void;
//     // deleteTodoList: (id:string) => void;
//     addItem: (value: string) => void;
// }

class AddNewItemForm extends React.Component <IProps, IState> {

    state:IState = {
        error: false,
        title: ""
    }

    // deleteTask = () => {
    //     this.props.deleteTodoList(this.props.id)
    // }


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

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        if(this.props.setText) {
            this.props.setText(e.currentTarget.value)
        }
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    }

    onKeyPress = (e: any) => {
        if(e.currentTarget.value === "Enter") {
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

export default AddNewItemForm;

// const mapStateToProps = (state: AppState) => {
//     return {
//         newTextFromItemForm: state.reducer
//     }
// }
//
// const mapDispatchToprops = (dispatch: Dispatch) => {
//     return {
//         setText: (text: string) => {
//             const action = {
//                 type: "SET-NEW-TEXT",
//                 text
//             };
//             dispatch(action)
//         }
//     }
// }
// const ConnectedAddNewItemForm = connect(mapStateToProps,  mapDispatchToprops)(AddNewItemForm);
// export default ConnectedAddNewItemForm;


