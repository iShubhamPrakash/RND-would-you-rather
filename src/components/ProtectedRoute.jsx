import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ authenticated, component: Component, exact, path, ...rest }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            authenticated
                ? <Component {...props} {...rest} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location.pathname }
                }} />
        )}
    />
)

export default ProtectedRoute