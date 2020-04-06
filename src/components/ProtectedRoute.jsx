import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({ authenticated, Component, ...rest}) => (
    <Route
        {...rest}
        render={props => (
          authenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location.pathname}
                }}/>
        )}
    />
)

export default ProtectedRoute