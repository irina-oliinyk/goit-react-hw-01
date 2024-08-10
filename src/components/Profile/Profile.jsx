import css from './Profile.module.css';

export default function Profile({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.profileConteiner}>
      <div>
        <img src={avatar} alt={username} className={css.profileImg} />
        <p className={css.profileP}>{username}</p>
        <p className={css.profileParagraf}>@{tag}</p>
        <p className={css.profileParagraf}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileLi}>
          <span>Followers</span>
          <span className={css.pofileSpan}>{followers}</span>
        </li>
        <li className={css.profileLi}>
          <span>Views</span>
          <span className={css.pofileSpan}>{views}</span>
        </li>
        <li className={css.profileLi}>
          <span>Likes</span>
          <span className={css.pofileSpan}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
