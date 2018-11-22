import React, { Component } from 'react';
import List from './List';

// create three lists: todo, inprogress, done

class KanbanBoard extends Component {
    render() {
        return (
            <div className="app">
                <List id="todo" title="Do zrobienia" cards={
                    this.props.cards.filter((card) => card.status === "todo")
                }/>
                <List id="in-progress" title="W toku" cards={
                    this.props.cards.filter((card) => card.status === "in-progress")
                }/>
                <List id="done" title="Zrobione" cards={
                    this.props.cards.filter((card) => card.status === "done")
                } />
            </div>
        );
    }
}

export default KanbanBoard;