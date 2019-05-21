import React, {useState, useContext} from 'react';
import PostStyles from './styles/PostStyles.module.css';
import {ViewContext} from "./Tape";


const Post = ({authorName, authorIconURL, likesAmount, description, photoURL, hashtags}) => {
    const [likes, setLikes] = useState(likesAmount);
    const viewContext = useContext(ViewContext);

    return(
        <div className={PostStyles.dashboardBody}>
            {viewContext.viewType === 'tape'
                ?
                <div className={PostStyles.tapeBody}>
                    <div>
                        <img
                            className={PostStyles.authorIcon}
                            src={authorIconURL}
                            alt={'user icon'}
                        />
                        <strong className={PostStyles.authorName}>
                            {authorName}
                        </strong>
                    </div>
                    <div>
                        <img
                            src={photoURL}
                            alt={'posted'}
                        />
                    </div>
                    <div>
                        <button
                            className={PostStyles.likeButton}
                            onClick={() => {
                                setLikes(+likes + 1);
                            }}
                        >
                        </button>
                        {likes} likes
                    </div>
                    <div>
                        <strong className={PostStyles.leftRightSpace}>
                            {authorName}
                        </strong>
                        &nbsp;
                        {description}
                    </div>
                    <div className={PostStyles.leftRightSpace}>
                        <a href={'#'} className={PostStyles.link}>{hashtags[0]}</a>
                        <a href={'#'} className={PostStyles.link}>{hashtags[1]}</a>
                        <a href={'#'} className={PostStyles.link}>{hashtags[2]}</a>
                    </div>
                </div>

                :
                <img
                    className={PostStyles.dashboardPhoto}
                    src={photoURL}
                    alt={'posted'}
                />
            }

        </div>
    )

};

export default Post;