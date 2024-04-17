import AmigoListItem from "../amigoListItem/AmigoListItem";

const AmigoList = ({ amigos }) => {
  return (
    <ul>
      {amigos.map((amigo) => {
        return (
          <li key={amigo.id}>
            <AmigoListItem
              avatar={amigo.avatar}
              name={amigo.name}
              isOnline={amigo.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AmigoList;
