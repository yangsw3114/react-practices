import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';

export default function() {
    return (
        // <Fragment>
        //     <Header />
        //     <Content />
        // </Fragment>
        React.createElement(
            Fragment, 
            //Fragments는 DOM에 별도의 노드를 추가하지 않고 여러 자식을 그룹화할 수 있습니다.
            null, 
            React.createElement(Header, null), 
            React.createElement(Content, null))
    )
}