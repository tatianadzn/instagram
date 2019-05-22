import React, {useState} from 'react';
import Post from './Post';
import PostObjects from './PostObjects';
import TapeStyles from './styles/TapeStyles.module.css'
import Buttons from './Buttons';


//value = 'tape' || 'dashboard'
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
                    {PostObjects.map((post) =>
                        <Post key={post.id}
                              authorName={post.authorName}
                              authorIconURL = {post.authorIconURL}
                              likesAmount = {post.likesAmount}
                              photoURL = {post.photoURL}
                              description = {post.description}
                              hashtags = {post.hashtags}
                        />
                    )}
                </div>
            </ViewContext.Provider>
        </div>
    )
}

export default Tape;