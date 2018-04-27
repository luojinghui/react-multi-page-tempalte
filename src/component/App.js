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
    let module = await import('../tools/');

    this.setState({
      value: module.add(this.state.a, this.state.b)
    })
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className={styles.App_header}>
            <img src={logo} className={styles.App_logo} alt="logo" />
            <h1 className={styles.App_title}>Welcome to React</h1>
          </header>
        </div>
        <div onClick={this.onClickContent}>
          <Content />
          <h1>
            {
              `${this.state.a} + ${this.state.b} = ${this.state.value}`
            }
          </h1>
        </div>
        <p className={styles.App_intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
