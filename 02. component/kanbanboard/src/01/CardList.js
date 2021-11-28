import React from 'react';
import Card from './Card';

export default function CardList({title, cards}){
    return(
        <div class='CardList'>
            <h1>{title}</h1>
         
            {cards.map((card) => <Card
                                    cardtitle={card.title}
                                    desc={card.description}
                                    tasks={card.tasks} />) }
            </div>
    );
}