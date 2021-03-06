import React from 'react';
import Button from '@material-ui/core/Button';
import {ViewContext} from './Tape';
import TapeStyles from './styles/TapeStyles.module.css'

const Buttons = () => {

    return(
        <div className={TapeStyles.buttonBody}>
            <ViewContext.Consumer>
                {({viewType, setViewType}) => (
                    <Button onClick={() => setViewType('tape')}>Tape</Button>

                )}
            </ViewContext.Consumer>
            <ViewContext.Consumer>
                {({viewType, setViewType}) => (
                    <Button onClick={() => {setViewType('dashboard')}}>Dashboard</Button>
                )}
            </ViewContext.Consumer>

        </div>
    )
}

export default Buttons;