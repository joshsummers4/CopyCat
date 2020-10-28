import React from 'react';
import ReactDOM from 'react-dom';
import CopyCat from '../components/CopyCat.js';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: '',
      name: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying })
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  render() {
    return (
      <CopyCat 
        onToggle={this.toggleTape} 
        onCopy={this.state.copying} 
        onInput={this.state.input}
        onHandleChange={this.handleChange}
      />
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.boolean.isRequired,
  input: PropTypes.string.isRequired,
  toggleTape: PropTypes.boolean.isRequired,
  handleChange: PropTypes.string.isRequired,
  name: PropTypes.string
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app')); 