/**
 * @author Luojinghui & luojinghui424@gmail.com
 * @date 2018/5/2
 * @Description:
 */

import React, {Component} from 'react';
import { List, WhiteSpace, Modal, Toast } from 'antd-mobile';
import styles from '../../assets/scss/meetingControl.scss';

const Alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class index extends Component {
  render() {
    return (
      <div>
        <WhiteSpace style={{height: "15px"}}/>
        <List className="my-list">
          <Item extra="915353622534" arrow="horizontal" onClick={() => {
            Alert('通知', '开始跳转到会控详情页', [
              {
                text: 'Ok'
              },
            ])
          }}>主持我的会议</Item>
        </List>
        <div className={styles.am_list_header} />
        <List className="my-list">
          <Item arrow="horizontal" onClick={() => {
            window.location.href = window.location.protocol + "meetingOtherControl.html";
          }}>主持其他会议</Item>
        </List>
      </div>
    );
  }
}

export default index;
