import React, {Component} from 'react';
import {Row, Col, Form, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

export default class FetchDataComponent extends Component {

    static propTypes = {
        makeRequest: React.PropTypes.func,
        onSuccess: React.PropTypes.func,
        data: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    render() {
        return (
            <div>
                {/*<Col md={3}>*/}
                    {/*<p></p>*/}
                {/*</Col>*/}
                <Col md={4}>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <FormGroup controlId="textSubmit">
                                    <Row>
                                        <Col md={12}>
                                            <ControlLabel style={{color:'white'}}>
                                                Think of some phrase you'd like to hear
                                                from Obama, and we'll make it happen
                                            </ControlLabel>
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormControl
                                    style={{
                                        /*maxWidth: '400px',*/
                                        /*margin: 'auto'/*, backgroundColor:'gray', borderColor:'#777'*/
                                    }}
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Type your Obama speech here!"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                            </Col>
                        </Row>
                        <Row style={{paddingTop: '20px'}}>
                            <Col md={12}>
                                <Button type="submit" onClick={(e) => {
                                    e.preventDefault();
                                    this.props.makeRequest(this.state.value, this.props.onSuccess);
                                }}
                                        style={{margin: 'auto'}}>
                                    Make Obama Speak!
                                </Button>{this.props.data.status == 'REQUEST' ?
                                <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i> : ''}
                                {/*<span class="sr-only">Loading...</span>*/}
                            </Col>
                        </Row>
                    </Form>
                </Col>
                <Col md={8}>
                    <p></p>
                </Col>
            </div>
        );
    }
}