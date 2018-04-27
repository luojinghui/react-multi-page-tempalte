import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import styles from '../assets/scss/App.scss';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
      value: 0
    }
  }

  onClickContent = async () => {
    let {add} = await import('../tools/');

    this.setState({
      value: add(this.state.a, this.state.b)
    })
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className={styles.App_header}>
            <img src={logo} className={styles.App_logo} alt="logo" />
          </header>
          <h1>
            {
              `${this.state.a} + ${this.state.b} = ${this.state.value}`
            }
          </h1>
        </div>
        <div onClick={this.onClickContent}>
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
