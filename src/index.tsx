import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";

import UserSearchState from "./state/UserSearch";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      {/* <GuestList /> */}
      <UserSearch />
      {/* <UserSearchState /> */}
      {/* <EventComponent /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
