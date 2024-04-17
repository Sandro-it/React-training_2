const Account = ({ name, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <p>{name}</p>
        <img src={avatar} alt="avatar" />
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Account;
