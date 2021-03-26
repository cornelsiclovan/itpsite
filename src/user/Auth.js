import React, { useState, useContext } from 'react';

import { useForm } from '../../src/hooks/form-hook';
import { useHttpClient } from '../../src/hooks/http-hook';
import Button from '../FormElements/Button';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE,
    VALIDATOR_TYPE_EMAIL
} from '../util/validators';
import Input from '../FormElements/Input';
import Card from '../UIElements/Card';

import { AuthContext } from '../../src/context/auth-context';
import ErrorModal from '../../src/UIElements/ErrorModal';
import LoadingSpinner from '../../src/UIElements/LoadingSpinner';

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoadingMode, setIsLoadingMode] = useState(true);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();

    const [formState, inputHandler, setFormData] = useForm(
        {
            username:{
                value: '',
                isValid: 'false'
            },
            password: {
                value: '',
                isValid: false
            }
        }, false
    );

    const authSubmitHandler = async event => {
        event.preventDefault();

        console.log(formState.inputs.username.value);

        try {
            const responseData = await sendRequest(
                'http://localhost:5000/api/users/login',
                'POST',
                JSON.stringify({
                    username: formState.inputs.username.value,
                    password: formState.inputs.password.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );

            auth.login(responseData.userId, responseData.token);
        } catch(err){}
    }


    return(
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
                <Card className="authentication">
                    {isLoading && <LoadingSpinner asOverlay/>}
                    <h2>Login required</h2>
                    <hr/>
                    <form onSubmit={authSubmitHandler}>
                        <Input
                            id="username"
                            element="input"
                            type="text"
                            label="username"
                            validators={[VALIDATOR_REQUIRE]}
                            errorText="Please enter your username"
                            onInput={inputHandler}
                            />
                        <Input 
                            id="password"
                            element="input"
                            type="password"
                            label="Password"
                            validators={[VALIDATOR_REQUIRE]}
                            errorText="Please enter your password"
                            onInput={inputHandler}
                            />
                        <Button type="submit" disabled={!formState.isValid}>
                            {'LOGIN'}    
                        </Button>
                    </form>
                </Card>
        </React.Fragment>
    );
}

export default Auth;