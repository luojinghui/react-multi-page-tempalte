import React, { Component } from "react";
import logo from "../assets/images/logo.svg";
import styles from "../assets/scss/App.scss";
import Content from "./Content";
import { TabBar, List } from "antd-mobile";
const Item = List.Item;
const Brief = Item.Brief;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 1,
      b: 2,
      value: 0,
      selectedTab: "blueTab",
      hidden: false,
      fullScreen: true
    };
  }

  onClickContent = async () => {
    let { add } = await import("../tools/");

    this.setState({
      value: add(this.state.a, this.state.b)
    });
  };

  onJumpPage() {
    window.location.href = window.location.protocol + "meetingControl.html";
  }

  renderContent(pageText) {
    let { selectedTab } = this.state;

    if (selectedTab === "blueTab") {
      return (
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            textAlign: "center"
          }}
        >
          <List className="my-list">
            <Item arrow="horizontal" multipleLine onClick={this.onJumpPage.bind(this)}>
              Title <Brief>subtitle</Brief>
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              Title <Brief>subtitle</Brief>
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              Title <Brief>subtitle</Brief>
            </Item>
          </List>
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "white",
            height: "100%",
            textAlign: "center"
          }}
        >
          <div className="App">
            <header className={styles.App_header}>
              <img src={logo} className={styles.App_logo} alt="logo" />
            </header>
            <h1>{`${this.state.a} + ${this.state.b} = ${this.state.value}`}</h1>
          </div>
          <div onClick={this.onClickContent}>
            <Content />
          </div>
          <div style={{ paddingTop: 60 }}>
            Clicked “{pageText}” tab， show “{pageText}” information
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="直播"
            key="live content"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
            data-seed="logId"
          >
            {this.renderContent("Life")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="会议控制"
            key="meeting config"
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            {this.renderContent("Friend")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default App;
