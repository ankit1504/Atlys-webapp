import React, { useState } from 'react';
import CreatePost from '../../components/createPost';
import { AuthType } from '../../components/loginForm';
import LoginModal from '../../components/loginModal';
import PostCard from '../../components/postCard';
import feedData from '../../constants/mockData';
import './styles.css';


const FeedPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  return (
      <div className='feed-page'>
          <div className='header-container'>
            <h1 className='header-title'>Hello Jane</h1>
            <p className='header-subtitle'>How are you doing today? Would you like to share something with the community 🤗</p>
          </div>
          <CreatePost setShowLoginForm={setShowLoginForm}/>
          {feedData.map((item, index) => <PostCard key={index} item={item} setShowLoginForm={setShowLoginForm}/>)}
          {showLoginForm && (
              <LoginModal setShowLoginForm={setShowLoginForm} authType={AuthType.Register}/>
          )}
      </div>
  );
}

export default FeedPage;