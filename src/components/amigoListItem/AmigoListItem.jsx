import css from "./AmigoListItem.module.css";

const AmigoListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline ? css.Online : css.Offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default AmigoListItem;
