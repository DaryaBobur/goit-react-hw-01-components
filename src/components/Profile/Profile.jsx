import PropTypes from 'prop-types';
import {ContainerProfile, UserName, Description, Stats, StatsItem, } from "./ProfileStyled"

const Profile = ({username, tag, location, avatar, stats}) => {
    return (
  <ContainerProfile>

    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
        width={240}
      />

      <UserName>{username}</UserName>
      <Description>@{tag}</Description>
      <Description>{location}</Description>
    </div>
    
    <Stats>
      <StatsItem>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </StatsItem>
      <StatsItem>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </StatsItem>
      <StatsItem>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </StatsItem>
    </Stats>
   
  </ContainerProfile>
    )
  };
  
  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
  }

  export default Profile;