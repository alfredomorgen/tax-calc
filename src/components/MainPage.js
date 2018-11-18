import React from 'react';

import { getTaxPercentage } from '../utils/taxUtils';

import InputNumber from './InputNumber';

export default class MainPage extends React.Component {
  state = {
    total: 0,
    tax: 0,
  };

  handleChange = stateKey => e => {
    this.setState({ [stateKey]: e.target.value });
  };

  render() {
    const taxPercentage = getTaxPercentage(this.state.total, this.state.tax);
    return (
      <div>
        <InputNumber
          label={'Total Value'}
          min={0}
          onChange={this.handleChange('total')}
          value={this.state.total}
        />
        <InputNumber
          label={'Tax Value'}
          min={0}
          onChange={this.handleChange('tax')}
          value={this.state.tax}
        />
        <InputNumber
          label={'Tax Percentage'}
          min={0}
          readOnly
          value={taxPercentage}
        />
      </div>
    );
  }
}
