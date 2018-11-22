import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList = [
    {
        id: 1,
        title: "Przeczytać książkę",
        description: "Przeczytać całą książkę",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Napisać trochę kodu",
        description: "Wzorować się na kodzie z książki",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "Przykład listy kontaktów",
                done: true
            },
            {
                id: 2,
                name: "Przykład Kanban",
                done: false
            },
            {
                id: 3,
                name: "Eksperymenty",
                done: false
            }
        ]
    },
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));