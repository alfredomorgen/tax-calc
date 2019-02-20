import React from 'react';

import { getTaxPercentageList, getTotalTaxPercentage } from '../utils/TaxUtils';
import { getGrandTotal } from '../utils/TotalUtils';
import InputTextNumber from './InputTextNumber';
import './MainPage.css';

export default class MainPage extends React.Component {
  state = {
    subtotal: '',
    serviceCharge: '',
    tax: '',
  };

  handleChange = stateKey => e => {
    const value = e.target.value;
    const numberValue = value.replace(/[\D]/g, '');
    this.setState({ [stateKey]: numberValue });
  };

  getFormattedPercentageLabel = (label, taxPercentage) => {
    if (Number(taxPercentage) > 0) {
      return `${label} (${taxPercentage}%)`;
    }
    return label;
  };

  render() {
    const { subtotal, serviceCharge, tax } = this.state;
    const taxPercentageList = getTaxPercentageList(
      subtotal,
      serviceCharge,
      tax
    );

    return (
      <div className={'MainPage'}>
        <InputTextNumber
          label={'Subtotal'}
          min={0}
          onChange={this.handleChange('subtotal')}
          value={this.state.subtotal}
        />
        <InputTextNumber
          label={this.getFormattedPercentageLabel(
            'Service Charge',
            taxPercentageList[0]
          )}
          min={0}
          onChange={this.handleChange('serviceCharge')}
          value={this.state.serviceCharge}
        />
        <InputTextNumber
          label={this.getFormattedPercentageLabel(
            'Tax Value',
            taxPercentageList[1]
          )}
          min={0}
          onChange={this.handleChange('tax')}
          value={this.state.tax}
        />

        <InputTextNumber
          disabled
          label={'Grand Total (just for checking)'}
          min={0}
          readOnly
          value={getGrandTotal(serviceCharge, tax, subtotal)}
        />
        <InputTextNumber
          disabled
          label={'Total Tax Percentage (result)'}
          min={0}
          readOnly
          value={getTotalTaxPercentage(taxPercentageList)}
        />
      </div>
    );
  }
}
