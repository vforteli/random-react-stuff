import React from 'react';
import { Component } from 'react';

class ButtonLoading extends Component {
    render() {
        const { loading: Loading, ...rest } = this.props;
        return (
            <button {...rest} disabled={Loading}> {Loading && <span><i className="fas fa-circle-notch fa-spin"></i></span>} {this.props.children}</button>
        );
    }
}

export { ButtonLoading };