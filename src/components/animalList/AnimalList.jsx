import AnimalListItem from "../animalListItem/AnimalListItem";

const AnimalList = ({ animals }) => {
  return (
    <ul>
      {animals.map((animal) => {
        return (
          <li key={animal.id}>
            <AnimalListItem
              avatar={animal.avatar}
              name={animal.name}
              isOnline={animal.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AnimalList;
