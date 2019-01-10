import React from "react";
import { Switch, Route } from "react-router-dom";
import Page from '../Page/Page';

const Main = (props) => (
    <main>
        <Switch>
            <Route path="/:id?" render={(routeProps) => <Page {...routeProps} {...props} />}  />
        </Switch>
    </main>
)

export default Main;