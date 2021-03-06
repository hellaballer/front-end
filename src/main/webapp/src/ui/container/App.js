import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import TopNav from 'component/TopNav';

export class App extends Component {

    render() {
        return (
            <div id="application">
                <Grid>
                    <Row>
                        <TopNav data={this.props.data}/>
                        {/*<Image src='../../assets/res/demoPoster.jpg'/>*/}
                        {this.props.children}
                    </Row>
                </Grid>
            </div>
        );
    }
}

const maStateToProps = (state) => {
    return {
        data: state.stub
    };
};
const mapDispatchToProps = {};

export default connect((state) => maStateToProps(state), mapDispatchToProps)(App);
