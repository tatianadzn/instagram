import React from 'react';
import Post from './Post';
import PostObjects from './PostObjects'

const Tape = () => {

    return(
        <div>
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
    )
}

export default Tape;