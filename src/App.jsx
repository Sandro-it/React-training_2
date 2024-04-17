import Profile from "./components/profile/Profile";
import userData from "./data/userData.json";
import Personage from "./components/personage/Personage";
import personageData from "./data/personageData.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";
import Account from "./components/account/Account";
import accountData from "./data/accountData.json";
import AnimalList from "./components/animalList/AnimalList";
import animals from "./data/animals.json";
import AmigoList from "./components/amigoList/AmigoList";
import amigos from "./data/amigos.json";
import TransferHistory from "./components/transferHistory/TransferHistory";
import transfer from "./data/transfer.json";
import "./App.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <Personage
        name={personageData.username}
        tag={personageData.tag}
        location={personageData.location}
        image={personageData.avatar}
        stats={personageData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Account
        name={accountData.username}
        tag={accountData.tag}
        location={accountData.location}
        avatar={accountData.avatar}
        stats={accountData.stats}
      />
      <AnimalList animals={animals} />
      <AmigoList amigos={amigos} />
      <TransferHistory items={transfer} />
    </>
  );
};

export default App;

// Звичайно, давайте розберемо цей код:

// 1. **import Profile from "./components/profile/Profile";:**
//    - Цей рядок імпортує компонент `Profile` з файлу `Profile.js` у папці `components/profile`.

// 2. **import userData from "./userData.json";:**
//    - Цей рядок імпортує дані про користувача з файлу JSON з назвою `userData.json`. Ці дані будуть використовуватися для заповнення властивостей компонента `Profile`.

// 3. **import "./App.css";:**
//    - Цей рядок імпортує CSS файл для стилізації компонента `App`. Це допоможе візуально оформити вміст додатка.

// 4. **const App = () => {...}:**
//    - Ця функція визначає головний компонент додатка `App`. Вона є функціональним компонентом React.

// 5. **return (...):**
//    - Це тіло функції `App`, яке визначає, що буде повернено з цього компонента.

// 6. **<>...</>:**
//    - Це фрагмент React, який може містити багато дочірніх елементів без необхідності обгортати їх у `<div>`.

// 7. **<Profile ... />:**
//    - Цей тег `<Profile>` є компонентом `Profile`, який був імпортований раніше.
//    - Властивості цього компонента (`name`, `tag`, `location`, `image` і `stats`) заповнюються даними з імпортованого файлу `userData.json`.
//    - Кожна властивість отримує дані з відповідного поля об'єкта `userData`.

// 8. **export default App;:**
//    - Цей рядок експортує компонент `App`, щоб його можна було використовувати в інших частинах програми.

// Отже, цей код створює головний компонент додатка `App`, який включає в себе компонент `Profile`, заповнений даними користувача з файлу `userData.json`.

// Файл App.js:

// <></>: Ці порожні теги використовуються для огортання багатьох дочірніх елементів без додаткових контейнерів, таких як <div>.
// <Profile ... />: Цей тег <Profile> використовується для виклику компонента Profile і передачі йому властивостей з об'єкта userData.
// name={userData.username}, tag={userData.tag}, тощо: Ці конструкції використовуються для передачі даних про користувача (ім'я, тег, місцезнаходження, зображення та статистика) в компонент Profile.

// const App = () => {
//   return (
//     <>
//       <Personage
//         name={personageData.username}
//         tag={personageData.tag}
//         location={personageData.location}
//         image={personageData.avatar}
//         stats={personageData.stats}
//       />
//     </>
//   );
// };

// export default App;
