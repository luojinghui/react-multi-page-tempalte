/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/4/27
 * @Description:
 */
import React, {Component} from 'react';
import styles from '../../assets/scss/App.scss';

class index extends Component {
  render() {
    return (
      <div className="App app2">
        <div id={styles.app}>
          <div>contet One </div>
          <div>contet Two</div>
        </div>
      </div>
    );
  }
}

index.propTypes = {};
index.defaultProps = {};

export default index;
