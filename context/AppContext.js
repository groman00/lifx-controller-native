import React, { Component } from 'react';
import lightings from '../constants/Lighting';
import client from '../lib/LifxClient';

const Context = React.createContext({});

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightings,
      setState: this.setState
    };
  }
  listLights = () => {
    client.listLights()
      .then(lights => console.log(lights))
      .catch(() => console.log('list lights error'));
  };
  setState = (selector, color) => {
    client.setState(selector, {
      color,
      power: 'on',
    })
      // .then(lights => console.log(lights))
      // .catch(() => console.log('list lights error'));      
  }
  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

export const AppConsumer = Context.Consumer;
