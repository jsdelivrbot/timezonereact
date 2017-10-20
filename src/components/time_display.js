import React, { Component } from 'react';
import { connect } from 'react-redux';

class TimeDisplay extends Component {
    renderTime(timezone) {
        let time = new Date();
        if (timezone === 'MST') {
            time = new Date(time.setHours(time.getHours() + 1));
        } else if (timezone === 'CST') {
            time = new Date(time.setHours(time.getHours() + 2));
        } else if (timezone === 'EST') {
            time = new Date(time.setHours(time.getHours() + 3));
        }
        const timeStr = time.toString();
        return (
            <h1>{timeStr}</h1>
            );
    }

    render() {
        return (
            <div>
                {this.renderTime(this.props.timezone)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { timezone: state.timezone };
}

export default connect(mapStateToProps)(TimeDisplay);