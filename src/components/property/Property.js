import React, { PureComponent } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'

export default class Property extends PureComponent{
    render() {
        return (
            <div className="header">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12} sm={6}>
                            <div className="crumbs">
                                <span><a href="##" className="main-rea">{this.props.data.name}</a></span>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}