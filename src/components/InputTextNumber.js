import PropTypes from 'prop-types';
import React from 'react';

export default class InputTextNumber extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    min: PropTypes.number,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  static defaultProps = {
    disabled: false,
    readOnly: false,
  };

  getFormattedValue = () => {
    const { value } = this.props;
    return value && Number(value).toLocaleString();
  }

  render() {
    const { disabled, label, min, onChange, readOnly } = this.props;
    return (
      <React.Fragment>
        {label && <label>{label}</label>}
        <input
          type={'text'}
          disabled={disabled}
          inputMode={'numeric'}
          min={min}
          onChange={onChange}
          pattern={'[0-9]*'}
          readOnly={readOnly}
          value={this.getFormattedValue()}
        />
      </React.Fragment>
    );
  }
}
