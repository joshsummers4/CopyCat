import React from 'react';
import styles from '../styles.js';


const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCat extends React.Component {

  render() {
    return (
      <div style={styles.divStyle}>
        <h1 style={{marginBottom: 80}}>
          Copy Cat
          {{#if this.props.name}}
            {this.props.name}
          {{else}}
            Tom
          {{/if}}
        </h1>
        <input type='text' value={this.props.input} onChange={this.props.handleChange}></input>
        <img alt='cat'
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
          style={styles.imgStyle}
        />
        <p>{this.props.copying && this.input.value} </p>
      </div>
    );
  };
}

export default CopyCat;