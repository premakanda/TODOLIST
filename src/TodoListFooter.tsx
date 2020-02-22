import React from 'react';
import {ITask} from "./types/types";

interface IProps {
    filterValue: string;
    changeFilter: (value:string)=> void
}

interface IState {
    isHidden: boolean

}

class TodoListFooter extends React.Component <IProps, IState> {

    state: IState = {
        isHidden: false,
    };

    onAllFilterClick = () => {this.props.changeFilter('All')};
    onCompletedFilterClick = () => {this.props.changeFilter('Completed')};
    onActiveFilterClick = () => {this.props.changeFilter('Active')};
    onShowFiltersClick = () => {this.setState({isHidden: false})};
    onHideFiltersClick = () => {this.setState({isHidden: true})};

    render = () => {
        let classForAll = (this.props.filterValue === "All") ? "filter-active" : "";
        let classForCompleted = (this.props.filterValue === "Completed") ? "filter-active" : "";
        let classForActive = (this.props.filterValue === "Active") ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden &&
                    <div className="todoList-footer-block">
                        <button onClick={this.onAllFilterClick}
                                className={classForAll}>All</button>
                        <button onClick={this.onCompletedFilterClick}
                                className={classForCompleted}>Completed</button>
                        <button onClick={this.onActiveFilterClick}
                                className={classForActive}>Active</button>
                    </div>
                }
                {!this.state.isHidden &&
                <button onClick={this.onHideFiltersClick}>hide</button>}
                {this.state.isHidden &&
                <button onClick={this.onShowFiltersClick}>show</button>}
            </div>
        );
    }
}

export default TodoListFooter;










