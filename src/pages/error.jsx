import { Link, useRouteError } from 'react-router-dom';
import React from 'react';
import { Button, Result } from 'antd';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Result
                status="403"
                title="Oops!"
                subTitle={error.statusText || error.message}
                extra={
                    <Button type="primary">
                        <Link to="/">
                            <p>Back to home page</p>
                        </Link>
                    </Button>
                }
            />
        </div>
    );
};

export default ErrorPage;
