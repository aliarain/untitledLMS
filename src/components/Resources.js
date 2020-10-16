import React, { Component } from 'react'
import TextBooks from './sub-components/Resources/TextBooks'

export default class Resources extends Component {
    render() {
        return (
            <div className='routeArea'>
                 <TextBooks />
            </div>
        )
    }
}
