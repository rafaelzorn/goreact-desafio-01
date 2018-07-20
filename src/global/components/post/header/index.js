import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = props => (
    <div className="header">
        <div className="avatar">
            <img src={props.avatar} alt={props.name} />
        </div>

        <div className="info">
            <span className="name">{props.name}</span>
            <br />
            <span className="time">{props.time}</span>
        </div>
    </div>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

export default Header;
