import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'

export default class TopNav extends Component {

    static propTypes = {
        data: React.PropTypes.object
    };

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to={{pathname: '/'}} active={false}>
                            <p style={{color:'black'}}>Home</p>
                        </LinkContainer>
                        <Navbar.Toggle />
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to={{pathname: '/'}}>
                            <NavItem eventKey={1} href="#" style={{color:'black'}}>Hello</NavItem>
                        </IndexLinkContainer>
                        {this.props.data.videoURL != '' ? <LinkContainer to={{pathname: '/video'}}>
                            <NavItem eventKey={2} href="#" style={{color:'black'}}>Video</NavItem>
                        </LinkContainer> : ''}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}