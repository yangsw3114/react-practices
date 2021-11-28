import React from 'react';

export default function ListItem({key, name, quantity}) {
    return (
        <li>{name} : {quantity}</li>
    );
}