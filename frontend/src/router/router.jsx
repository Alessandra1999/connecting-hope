import { Route, Switch } from 'react-router-dom';

import { Profile, ShowCampaign, About } from '../ui/screens';

export function Router() {
  return (
    <div className="container bg-gradient-to-b from-primary-light-250 to-primary-light-400">
      <Switch>
        <Route path="/login">LOGIN</Route>
        <Route path="/home">HOME</Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/campaign/:campaignId">
          <ShowCampaign />
        </Route>
        <Route path="/">PUBLIC HOME</Route>Í
      </Switch>
    </div>
  );
}
