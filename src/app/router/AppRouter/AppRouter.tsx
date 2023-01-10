import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { publicRoutes } from "../routes";

const AppRouter = () => {
    return (
        <Suspense fallback={<></>}>
            <Switch>
                {publicRoutes.map((route) =>
                    route.path ? (
                        <Route
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                            key={route.path}
                        />
                    ) : null
                )}
                {/* <Route path="*" component={Page404} /> */}
                <Redirect to={"login/signIn"} />
            </Switch>
        </Suspense>
    );
};

export default AppRouter;
