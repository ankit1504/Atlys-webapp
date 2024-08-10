/* eslint-disable jsx-a11y/alt-text */
import { cilCommentSquare } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React from 'react';
import { IFeedDataItem } from '../../constants/mockData';
import './styles.css';

interface IPostCardProps {
  item: IFeedDataItem;
  setShowLoginForm: (value: boolean) => void;
}

const PostCard: React.FunctionComponent<IPostCardProps> = (props: IPostCardProps) => {
  return (
      <div className='post-card-container' onClick={() => props.setShowLoginForm(true)}>
          <div className='post-card-header'>
            <div className='post-card-image'><img src={require(`../../assets/${props.item.userImageName}.png`)}/></div>
            <div className='post-card-header-info'>
              <div>
                <p className='username-text'>{props.item.userName}</p>
                <p className='active-min-text'>{props.item.activeMinsAgo}mins ago</p>
              </div>
              <button className='post-card-button'>...</button>
            </div>
          </div>
          <div className='post-data-container'>
              <div className='data-icon'>{props.item.userMood}</div>
              <p className='data-text'>{props.item.data}</p>
          </div>
          <div className='post-comment-container'>
            <CIcon icon={cilCommentSquare} height={20} width={20} color='#C5C7CA'/>
            <p className='comment-count-text'>{props.item.commentCount} comments</p>
          </div>
      </div>
  );
}

export default PostCard;