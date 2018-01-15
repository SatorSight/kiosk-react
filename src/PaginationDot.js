import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    root: {
        height: 14,
        width: 14,
        textAlign: 'center',
        cursor: 'pointer',
        border: 0,
        background: 'none',
        padding: 0,
        display: 'inline',
    },
    dot: {
        border: '1px solid #7E6092',
        height: 8,
        width: 8,
        borderRadius: 5,
        margin: 2,
    },
    active: {
        backgroundColor: '#7E6092',
    },
};

class PaginationDot extends Component {
    handleClick = event => {
        this.props.onClick(event, this.props.index);
    };

    render() {
        const { active } = this.props;

        let styleDot;

        if (active) {
            styleDot = Object.assign({}, styles.dot, styles.active);
        } else {
            styleDot = styles.dot;
        }

        return (
            <button style={styles.root} onClick={this.handleClick}>
                <div style={styleDot} />
            </button>
        );
    }
}

PaginationDot.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PaginationDot;