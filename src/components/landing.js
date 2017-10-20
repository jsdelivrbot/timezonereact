import React, { Component } from 'react';
import TimeDisplay from './time_display'
import TZButtons from './tz_buttons'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>US Time Zone Display</h1>
        <TZButtons />
        <TimeDisplay />
      </div>
    );
  }
}
