import React from 'react';

export default function() {

    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let session = 'AM';
    if(hours > 12){
        session = 'PM';
    }

    return{
        <div>
            {hours} : {minutes} : {seconds} {session}
        </div>
    }
}