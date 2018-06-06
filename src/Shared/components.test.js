import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonLoading } from './components';

it('shows loading button loading without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonLoading loading={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
