import PropTypes from 'prop-types';
import React from 'react';

export default class InputNumber extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    min: PropTypes.number,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    value: PropTypes.number,
  };

  static defaultProps = {
    readOnly: false,
    value: 0,
  };

  render() {
    const { label, min, onChange, readOnly, value } = this.props;
    return (
      <span>
        {label && <label>{label}</label>}
        <input
          type={'number'}
          min={min}
          onChange={onChange}
          readOnly={readOnly}
          value={value}
        />
      </span>
    );
  }
}
