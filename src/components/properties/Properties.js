import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Property from '../property/Property'

class Properties extends PureComponent {

    render() {
        let list = [];
        Object.keys(this.props.data).forEach((key)  => {
            list.push(<Property data={this.props.data[key]} key={key}/>);
        });
        return (
            <div className="property-list">
                {list}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    ui: state.ui,
})

export default connect(mapStateToProps)(Properties)
