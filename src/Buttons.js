import React from 'react';
import Button from '@material-ui/core/Button';
import {ViewContext} from './Tape';

const Buttons = () => {

    return(
        <div>
            <ViewContext.Consumer>

                {({viewType, setViewType}) => (
                    <Button onClick={() => setViewType}>Tape</Button>
                )}
            </ViewContext.Consumer>
            {/*<ViewContext.Consumer>*/}
                {/*{({viewType, setViewType}) => (*/}
                    {/*<Button onClick={() => {setViewType('dashboard')}}>Dashboard</Button>*/}
                {/*)}*/}
            {/*</ViewContext.Consumer>*/}

        </div>
    )
}

export default Buttons;