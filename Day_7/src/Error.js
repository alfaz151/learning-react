import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <h1>{error.status} - {error.statusText}</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}   

export default ErrorPage;