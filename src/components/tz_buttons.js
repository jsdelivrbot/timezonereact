import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTimezone } from '../actions';

class TZButtons extends Component {
    tzList = ['PST','MST','CST','EST'];
    
    renderButton(tzName) {
        return (
            <button
                key={tzName}
                className={this.renderButtonColor(this.props.timezone, tzName)}
                onClick={() => this.props.selectTimezone(tzName)}>
                {tzName}
            </button>
        );
    }

    renderButtonColor(timezone, button) {
        if(!timezone && button == 'PST') {
            return 'btn btn-danger'
        }
        if(timezone===button) {
            return 'btn btn-danger';
        }
        return 'btn btn-primary'
    }

    render() {
        return (
            <div>
                {this.tzList.map(this.renderButton.bind(this))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { timezone: state.timezone };
}

export default connect(mapStateToProps, { selectTimezone })(TZButtons);