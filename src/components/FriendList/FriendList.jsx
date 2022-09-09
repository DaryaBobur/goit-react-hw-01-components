import PropTypes from 'prop-types';
import { FriendsList, FriendItem, OnlineFriend } from './FriendList.styled';

export function FriendList({friends}) {
 return (    
<FriendsList className="friend-list">
{friends.map(friend => (
    <FriendItem className="item" key={friend.id}>
    <OnlineFriend className="status" isOnline={friend.isOnline}></OnlineFriend>
    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <p className="name">{friend.name}</p>
  </FriendItem>
))}
</FriendsList>
)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}))
}