import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import { SwingLeftContent } from '../Animations.js';

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '', theme: 'snow' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
  	this.setState({ editorHtml: html });
  }

  render () {
    return (
      <div>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          defaultValue={this.props.defaultValue}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
         />
       </div>
     )
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}

Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

Editor.propTypes = {
  placeholder: PropTypes.string,
}

class AddForm extends Component {
    render() {
        var hasName = (typeof(this.props.name) === "object");
        return (
          <Form>
            <SwingLeftContent><Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input name="firstName" id="firstName" placeholder="Jean"
                   defaultValue={(hasName) ? this.props.name[0] : ""}/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="middleName">Middle Name/Initial</Label>
                  <Input name="middleName" id="middleName" placeholder="Winsor/W."
                   defaultValue={(hasName) ? this.props.name[1] : ""}/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input name="lastName" id="lastName" placeholder="Doe"
                   defaultValue={(hasName) ? this.props.name[2] : ""}/>
                </FormGroup>
              </Col>
            </Row></SwingLeftContent>
            <SwingLeftContent><FormGroup>
              <Label for="notes">Notes</Label>
              <Editor placeholder={"Write something..."} defaultValue={this.props.notes}/>
            </FormGroup></SwingLeftContent>
            <SwingLeftContent><Button className="btn-rounded"><FontAwesomeIcon icon="check-circle" /> Submit</Button></SwingLeftContent>
          </Form>
        );
    }
}

class RequestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nClips: 150
        };
    }
    render() {
        const clipCost = 0.10;
        const shippingCost = 9.10;
        return (
          <Form>
            <SwingLeftContent><Row form>
              <Col md={8}>
                <FormGroup>
                  <Label for="shelterName">Shelter Name</Label>
                  <Input name="shelterName" id="shelterName" placeholder="Open Arms Homeless Shelter"/>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="nClips">Amount Needed</Label>
                  <Input name="nClips" id="nClips" placeholder="150"/>
                </FormGroup>
              </Col>
            </Row></SwingLeftContent>
            <SwingLeftContent><FormGroup>
              <Label for="details">Additional Details</Label>
              <Input type="textarea" name="details" id="details" placeholder=""/>
            </FormGroup></SwingLeftContent>
            <Row>
              <Col md={4}>
                <SwingLeftContent><h2>Order:</h2></SwingLeftContent>
                <SwingLeftContent><p>
                  <b>Address</b><br/>
                  1234 Hestia Street<br/>
                  Mt. Olympus, Macedonia 5678<br/>
                  Greece
                  <br/>
                  <b>Amount:</b> {this.state.nClips}<br/>
                  <b>Notes:</b> None<br/>
                </p></SwingLeftContent>
              </Col>
              <Col md={4}>
                <SwingLeftContent><h2>Projected Cost:</h2></SwingLeftContent>
                <SwingLeftContent><p className="lead">
                  + ${clipCost*this.state.nClips} <i>(Clips)</i><br/>
                  + ${shippingCost} <i>(Shipping)</i>
                </p></SwingLeftContent>
                <SwingLeftContent><hr/></SwingLeftContent>
                <SwingLeftContent><p className="lead">
                  = ${clipCost*this.state.nClips+shippingCost}
                </p></SwingLeftContent>
              </Col>
              <Col md={4} className="text-right">
                <SwingLeftContent><Button className="btn-rounded"><FontAwesomeIcon icon="check-circle" /> Request</Button></SwingLeftContent>
              </Col>
            </Row>
          </Form>
        );
    }
}

export { AddForm, RequestForm };
