import PropTypes from 'prop-types';
import React from 'react';

export default class InputNumber extends React.Component {
  static propTypes = {
    isInline: PropTypes.bool,
    label: PropTypes.string,
    min: PropTypes.number,
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    value: PropTypes.number,
  };

  static defaultProps = {
    isInline: false,
    readOnly: false,
    value: 0,
  };

  renderContent() {
    const { label, min, onChange, readOnly, value } = this.props;
    return (
      <React.Fragment>
        {label && <label>{label}</label>}
        <input
          type={'number'}
          min={min}
          onChange={onChange}
          readOnly={readOnly}
          value={value}
        />
      </React.Fragment>
    );
  }

  render() {
    const { isInline } = this.props;
    if (isInline) {
      return <span>{this.renderContent()}</span>;
    } else {
      return <div>{this.renderContent()}</div>;
    }
  }
}
