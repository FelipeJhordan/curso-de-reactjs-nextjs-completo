import { Component } from 'react';
import P from 'prop-types';
import './styles.css';

export class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  children: P.array.isRequired,
  disabled: P.bool,
  onClick: P.func.isRequired,
};
