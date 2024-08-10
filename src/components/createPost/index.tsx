import React from 'react';
import './styles.css';

interface ICreatePost {
    setShowLoginForm: (value: boolean) => void;
}

const CreatePost: React.FunctionComponent<ICreatePost> = (props: ICreatePost) => {
  return (
      <div className='create-post-container' onClick={() => props.setShowLoginForm(true)}>
          <p className='create-post-text'>Create post</p>
          <div className='create-input-container'>
              <div className='input-icon'>💬</div>
              <p className='input-text'>How are you feeling today ?</p>
          </div>
          <button className='post-button'>Post</button>
      </div>
  );
}

export default CreatePost;