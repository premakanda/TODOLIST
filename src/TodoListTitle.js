import React from 'react';

class TodoListTitle extends React.Component {
    state = {
        editTitle: false,
        title: this.props.title
    }

    deActivatedEdit = () => {
        this.setState({editTitle: false});
        this.props.updateTodoTitle(this.state.title);
    }

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    }

    activatedEdit = () => {
        this.setState({editTitle: true})
    }

    render = () => {
        return (
            <div className="todoList-header__wrapper">
                <h1>
                    {this.state.editTitle
                        ? <input autoFocus={true}
                                 value={this.state.title}
                                 onBlur={this.deActivatedEdit}
                                 onChange={this.onTitleChanged}
                        />
                        : <span onClick={this.activatedEdit}>
                    {this.state.title}</span>}
                </h1>
                <button className="btnClose" type="button" onClick={this.props.deleteTodolist}>x</button>
            </div>
        );
    }
}

export default TodoListTitle;
