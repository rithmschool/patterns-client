import React, { Component } from "react";
import uploadcare from "uploadcare-widget";

class UploadCare extends Component {

  componentDidMount() {
    const {id, onChange} = this.props;
    const widget = uploadcare.Widget(`#${id}`);

    if (onChange && typeof onChange === 'function') {
      widget.onChange((file) => {
        if (file) {
          file
            .done(info => onChange(info.cdnUrl))
            .fail(() => onChange(null))
        }
        else {
          onChange(null)
        }
      })
    }
  }

  render() {
    const {id, name} = this.props;
    return (<input type="hidden" id={id} name={name} data-public-key={process.env.REACT_APP_UPLOADCARE_PUBLIC_KEY} />)
  }
}

export default UploadCare;