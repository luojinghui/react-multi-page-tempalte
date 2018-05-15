/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/5/3
 * @Description:
 */
import React, { Component } from "react";
import {
  List,
  InputItem,
  Button,
  WhiteSpace,
  WingBlank,
  Toast,
  Modal
} from "antd-mobile";
import { getParam } from "../../tools/urlParams";
import styles from "../../assets/scss/meetingControl.scss";

const Alert = Modal.alert;

class meetingPassword extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      disabled: true,
      value: ""
    };
  }

  componentDidMount() {
    let urlParams = getParam();

    Toast.info(`meeting Id: ${urlParams.mId}`);
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
    Alert("输入", this.state.value, [
      {
        text: "确定",
        onPress: () => {
          Alert("通知", "开始跳转到会控页面");
        }
      }
    ]);
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
            maxLength={20}
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
            提交
          </Button>
        </WingBlank>
      </div>
    );
  }
}

export default meetingPassword;
