import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FrendList({ friends }) {
  return (
    <ul className={css.FriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
