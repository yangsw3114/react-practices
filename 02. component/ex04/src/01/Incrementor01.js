import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

onClickButton(e) {
    //setState안에서 변경해줘야 render적용
    this.setState({
        val: this.state.val + this.props.step
    })
}
onClickButton2(e) {
    //setState안에서 변경해줘야 render적용
    this.setState({
        val: this.state.val - this.props.step
    })
}

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                <button onClick={this.onClickButton2.bind(this)}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}