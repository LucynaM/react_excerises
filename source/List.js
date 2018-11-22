import React, { Component } from 'react';
import Card from './Card';

// display list name and render all its cards

class List extends Component {
    render () {
        cards = this.props.cards.map((card) => {
            return <Card id={card.id}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks}
            />
        });
        render (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;