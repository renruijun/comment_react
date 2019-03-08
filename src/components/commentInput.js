import React, { Component } from "react";
import { Button, Input, Icon, Row, Col } from "antd";
import "./commentInput.css";
const { TextArea } = Input;

class CommentInput extends Component {
  render() {
    return (
      <div>
        <Row className="comment_field">
          <Col className="comment_field_label" xxl={2} xl={3} md={4}>
            发言人
          </Col>
          <Col xxl={21} xl={20} md={19}>
            <Input placeholder="谁在发言?" />
          </Col>
        </Row>
        <Row className="comment_field">
          <Col className="comment_field_label" xxl={2} xl={3} md={4}>
            说什么
          </Col>
          <Col xxl={21} xl={20} md={19}>
            <TextArea placeholder="说点什么..." />
          </Col>
        </Row>
        <Row className="comment_field comment_field_handle">
          <Col
            xxl={{ span: 21, offset: 2 }}
            xl={{ span: 20, offset: 3 }}
            md={{ span: 19, offset: 4 }}
          >
            <Button className="comment_field_button" type="primary">
              发 言<Icon type="swap-right" />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentInput;
