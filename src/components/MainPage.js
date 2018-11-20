import React from 'react';
import { getTotalTaxPercentage } from '../utils/taxUtils';
import InputTextNumber from './InputTextNumber';
import './MainPage.css';

export default class MainPage extends React.Component {
  state = {
    total: 0,
    serviceCharge: 0,
    tax: 0,
  };

  handleChange = stateKey => e => {
    const value = e.target.value;
    const numberValue = value.replace(/[\D]/g, '');
    this.setState({ [stateKey]: Number(numberValue) });
  };

  render() {
    const taxPercentage = getTotalTaxPercentage(this.state.total, this.state.serviceCharge, this.state.tax);
    return (
      <div className={'MainPage'}>
        <InputTextNumber
          label={'Total Value'}
          min={0}
          onChange={this.handleChange('total')}
          value={this.state.total}
        />
        <InputTextNumber
          label={'Service Charge'}
          min={0}
          onChange={this.handleChange('serviceCharge')}
          value={this.state.serviceCharge}
        />
        <InputTextNumber
          label={'Tax Value'}
          min={0}
          onChange={this.handleChange('tax')}
          value={this.state.tax}
        />
        <InputTextNumber
          label={'Total Tax Percentage'}
          min={0}
          readOnly
          value={taxPercentage}
        />
      </div>
    );
  }
}
