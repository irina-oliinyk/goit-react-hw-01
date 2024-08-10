import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.FriendListItemConteiner}>
      <img src={avatar} alt="Avatar" width="96" />
      <p className={css.FriendListItemName}>{name}</p>
      {isOnline ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </div>
  );
}
