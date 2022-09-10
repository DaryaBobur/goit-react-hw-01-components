import PropTypes from 'prop-types';
import { FriendsList, FriendItem, OnlineFriend } from './FriendListStyled';

const FriendList = ({friends}) => {
 return (    
<FriendsList>
{friends.map(friend => (
    <FriendItem key={friend.id}>
    <OnlineFriend isOnline={friend.isOnline}></OnlineFriend>
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

export default FriendList;