import { Route, Switch } from "react-router-dom";
import { Profile } from "../ui/screens/profile";
import { About } from "../ui/screens/about/About";

export function Router() {
  return (
    <div className="container">
      <Switch>
        <Route path="/login">LOGIN</Route>
        <Route path="/home">HOME</Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">PUBLIC HOME</Route>
        <Route path="/about" element={<About />} />
      </Switch>
    </div>
  );
}
