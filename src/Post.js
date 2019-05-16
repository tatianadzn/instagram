import React, {useState} from 'react';

const Post = ({authorName, authorIconURL, likesAmount, description, photoURL, hashtags}) => {
    const [likes, setLikes] = useState(likesAmount);


    return(
        <div style={{
            width: '500px',
            margin: 'auto',
            'margin-bottom': '40px'
        }}>
            <div>
                <img
                    src = {authorIconURL}
                    alt={'user icon'}
                    style={{
                        margin: '8px',
                        'border-radius': "50%"
                    }}
                />
                <strong
                    style={{
                        'vertical-align': 'top',
                    }}
                >
                    {authorName}
                </strong>
            </div>
            <div>
                <img
                    src = {photoURL}
                    alt={'posted'}
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        setLikes(+likes + 1);
                    }}
                    style={{
                        width: '20px',
                        height: '20px',
                        'border-radius': '50%',
                        margin: '8px',
                        'background-color': 'white',
                    }}
                >
                </button>
                {likes} likes
            </div>
            <div style={{'margin-left': '8px'}}>
                <strong>{authorName}</strong>
                &nbsp;
                {description}
            </div>
            <div style={{'margin-left': '8px'}}>
                <a href={'#'} style={{color: "#306396"}}>{hashtags[0]}</a>
                &nbsp;
                <a href={'#'} style={{color: "#306396"}}>{hashtags[1]}</a>
            </div>
        </div>
    )

};

export default Post;