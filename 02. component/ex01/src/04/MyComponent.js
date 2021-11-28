import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

// https://react.vlpt.us/basic/11-render-array.html -> map에 대한 설명
export default function MyComponent({props01, props02, props03, props04, props05, props06, props07, props08, props09}) {
    return (
        <Fragment >
            <h2>Property Validation</h2>

            <span>props01: { props01 ? props01 : '--- Not Set ---' }</span>
            <br/>

            <span>props02: { props02 ? props02 : '--- Not Set ---' }</span>
            <br/>

            <span>props03: { props03 ? `${props03}` : '--- Not Set ---' }</span>
            <br/>

            <span>props04: { props04 ? props04.no : '--- Not Set ---' }</span>
            <br/>

            <span>props05: { props05 ? props05.map((e, i) => <b key={i}>{e}</b>) : '--- Not Set ---' }</span>
            <br/>

            <span>props06: { props06 ? props06() : '--- Not Set ---' }</span>
            <br/>

            <span>props07: { props07 ? props07 : '--- Not Set ---' }</span>
            <br/>
            
            <span>props08: { props08 ? props08.map((e, i) => e ? <b key={i}>{'true'}</b> : <b key={i}>{'false'}</b> ) : '--- Not Set ---' }</span>
            <br/>

            <span>
                props09: { 
                    props09 ? 
                        <div>
                            <h3>{props09.no}</h3>
                            <h4>{props09.name}</h4>
                            <h5>{props09.email}</h5>
                        </div> :                         
                        '--- Not Set ---' 
                }
            </span>
            <br/>

        </Fragment>
    )

}

MyComponent.propTypes = {
    // Built-In PropTypes Validator(primitive)
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired,
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // Built-In PropTypes Validator(Combined Primitive)
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
}

// default value
MyComponent.defaultProps = {
    props01: '기본값',
    props02: 10,
    props03: false,
    props04: {},
    props05: [],
    props06: () => {} // dummy 함수
}