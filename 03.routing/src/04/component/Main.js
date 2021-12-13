import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li><Link to={'/'}>[Main]</Link></li>
                <li><Link to={'/gallery'}>[Gallery]</Link></li>
                <li><Link to={'/guestbook'}>[Guestbook]</Link></li>
            </ul>

            <h1>NavLink - Main</h1>
            <ul>
                <li><NavLink to={'/'}>[Main]</NavLink></li>
                <li><NavLink to={'/gallery'}>[Gallery]</NavLink></li>
                <li><NavLink to={'/guestbook'}>[Guestbook]</NavLink></li>
            </ul>
        </div>
    );
}

//Link와 NavLink의 차이점은 많이 없지만 주로NavLink를 사용
// NavLink는 브라우저 요소에서 활성화된 페이지는 class="active"가 추가되어있다.
 