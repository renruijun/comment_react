import React, { Component } from "react";
import CommentInput from "../components/commentInput";
import { Divider, Icon } from "antd";

import "./mainPage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="comments_warpper">
        <CommentInput />
        <Divider orientation="left" type="horizontal">
          <span className="divider_text">
            大佬们说的啥
            <Icon type="caret-down" />
          </span>
        </Divider>
      </div>
    );
  }
}

export default MainPage;
