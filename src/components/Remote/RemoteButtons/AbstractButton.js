import React from 'react';

export default class AbstractButton extends React.Component {
    handler = (key) => {
        this.props.keyPress(key);
    };
}