/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/5/3
 * @Description:
 */
import React, { Component } from "react";
import { List, InputItem, Button, WhiteSpace, WingBlank } from "antd-mobile";
import styles from "../../assets/scss/meetingControl.scss";

class meetingPassword extends Component {
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

  render() {
    let { disabled, value } = this.state;

    return (
      <div>
        <WhiteSpace style={{ height: "15px" }} />
        <List>
          <InputItem
            type={"password"}
            placeholder="请输入主持密码"
            defaultValue={value}
            value={value}
            maxLength={13}
            clear={true}
            onChange={this.onInputChange.bind(this)}
          />
        </List>
        <WingBlank>
          <WhiteSpace style={{ height: "30px" }} />
          <Button type="primary" disabled={disabled} className={styles.main}>
            提交
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default meetingPassword;
