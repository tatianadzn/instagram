import React, {useState} from 'react';
import Post from './Post';
import PostObjects from './PostObjects';
import TapeStyles from './styles/TapeStyles.module.css'
import Buttons from './Buttons';


//tape or dashboard
export const ViewContext = React.createContext({
    viewType: 'tape',
    setViewType: () => {},
});


const Tape = () => {
    const [viewType, setViewType] = useState('tape');

    return(
        <div>
            <ViewContext.Provider value={{viewType, setViewType}}>
                <Buttons/>

                <div className={TapeStyles.tapeBody}>
                    <Post
                        authorName = {PostObjects[0].authorName}
                        authorIconURL = {PostObjects[0].authorIconURL}
                        likesAmount = {PostObjects[0].likesAmount}
                        photoURL = {PostObjects[0].photoURL}
                        description = {PostObjects[0].description}
                        hashtags = {PostObjects[0].hashtags}
                    />
                    <Post
                        authorName = {PostObjects[1].authorName}
                        authorIconURL = {PostObjects[1].authorIconURL}
                        likesAmount = {PostObjects[1].likesAmount}
                        photoURL = {PostObjects[1].photoURL}
                        description = {PostObjects[1].description}
                        hashtags = {PostObjects[1].hashtags}
                    />
                    <Post
                        authorName = {PostObjects[2].authorName}
                        authorIconURL = {PostObjects[2].authorIconURL}
                        likesAmount = {PostObjects[2].likesAmount}
                        photoURL = {PostObjects[2].photoURL}
                        description = {PostObjects[2].description}
                        hashtags = {PostObjects[2].hashtags}
                    />
                </div>
            </ViewContext.Provider>
        </div>
    )
}

export default Tape;