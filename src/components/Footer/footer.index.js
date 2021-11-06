import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import styles from './footer.styles'

export class Footer extends Component {

    render() {
        let {classes} = this.props;
        console.log(classes);
        return (
            <div>
                
            </div>
        )
    }
}

export default withStyles(styles)(Footer)
