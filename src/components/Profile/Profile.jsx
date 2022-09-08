import PropTypes from 'prop-types';
import {Container, UserName, Description, Stats} from "./Profile.styled"
export function Profile ({username, tag, location, avatar, stats}) {
    return (
      <Container>
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
        width={240}
      />
      <UserName>
      <p className="name">{username}</p>
      </UserName>
    
    <Description>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
      </Description>
    </div>
  
    <ul className="stats">
      <Stats>
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{stats.views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{stats.likes}</span>
      </li>
      </Stats>
    </ul>
  </div>
  </Container>
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