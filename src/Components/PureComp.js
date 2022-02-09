import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  render() {
    return <div> Pure Components {this.props.name}</div>;
  }
}

export default PureComp;
