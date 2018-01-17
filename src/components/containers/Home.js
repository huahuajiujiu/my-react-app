import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Header from '../header/Header'
import Properties from '../properties/Properties'
import Footer from '../footer/Footer'
import {bindActionCreators} from 'redux'
import * as propertyActions from '../properties/action'


class Home extends PureComponent {

    componentDidMount() {
        this.props.actions.getAllProperties()
    }

    render() {
        return [
            <Header key={"header"}/>,
            <Properties key={"properties"} data={this.props.properties}/>,
            <Footer key={"footer"}/>
        ];
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
    properties: state.properties
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(propertyActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
