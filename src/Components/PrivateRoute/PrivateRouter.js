import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';


const PrivateRouter = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRouter;