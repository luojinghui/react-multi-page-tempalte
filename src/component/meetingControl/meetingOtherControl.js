/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/5/3
 * @Description:
 */
import React, { Component } from "react";
import { List, InputItem, Button, WhiteSpace, WingBlank, Modal } from "antd-mobile";
import styles from "../../assets/scss/meetingControl.scss";

const Alert = Modal.alert;

class meetingOtherControl extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled: true,
      value: ""
    };
  }

  onInputChange(val) {
    if (val.length > 0) {
      this.setState({
        value: val,
        disabled: false
      });

      return;
    }

    this.setState({
      value: val,
      disabled: true
    });
  }

  onClickSure() {

  }

  render() {
    let { disabled, value } = this.state;

    return (
      <div>
        <WhiteSpace style={{ height: "15px" }} />
        <List>
          <InputItem
            type={"digit"}
            placeholder="请输入云会议号"
            defaultValue={value}
            value={value}
            maxLength={13}
            clear={true}
            onChange={this.onInputChange.bind(this)}
          />
        </List>
        <WingBlank>
          <WhiteSpace style={{ height: "30px" }} />
          <Button
            type="primary"
            disabled={disabled}
            className={styles.main}
            onClick={this.onClickSure.bind(this)}
          >
            主持会议
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default meetingOtherControl;
