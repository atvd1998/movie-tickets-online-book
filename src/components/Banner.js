import React, { Component } from 'react';
import banner from '../assets/images/natra_banner.jpg';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner
    };
  }
  render() {
    return <img className="banner" src={this.state.banner} alt="this is banner" />;
  }
}
