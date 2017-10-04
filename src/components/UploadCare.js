import React, { Component } from 'react';
import uploadcare from 'uploadcare-widget';
import PropTypes from 'prop-types';

class UploadCare extends Component {
  componentDidMount() {
    const { onChange } = this.props;
    const widget = uploadcare.Widget(this.input);

    if (onChange && typeof onChange === 'function') {
      widget.onChange(file => {
        if (file) {
          file.done(info => onChange(info.cdnUrl)).fail(() => onChange(null));
        } else {
          onChange(null);
        }
      });
    }
  }

  render() {
    const { id, name } = this.props;
    return (
      <input
        type="hidden"
        name={name}
        id={id}
        ref={input => {
          this.input = input;
        }}
        data-public-key={process.env.REACT_APP_UPLOADCARE_PUBLIC_KEY}
      />
    );
  }
}

UploadCare.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UploadCare;
