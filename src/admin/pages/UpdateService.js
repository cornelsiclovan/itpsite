import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../FormElements/Button';
import Input from '../../FormElements/Input';
import {useForm} from '../../hooks/form-hook';
import {useHttpClient} from '../../hooks/http-hook';
import Card from '../../shared/components/UIElements/Card';
import ErrorModal from '../../UIElements/ErrorModal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE } from '../../util/validators';

const BASE_URL=process.env.REACT_APP_BASE_URL;

const UpdateService = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedService, setLoadedService] = useState();
    const serviceId = useParams().id;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm({
        service_name: {
            value: "",
            isValid: false
        }
    },
    false
    );

    useEffect(() => {
        const fetchService = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/items/${serviceId}`)
                setLoadedService(responseData.item);

                setFormData(
                    {
                        service_name : {
                            value: responseData.item.service_name,
                            isValid: true
                        }
                    },
                    true
                );

            } catch(err){}
        }

        fetchService();
    }, [sendRequest, serviceId, setFormData]);   

    const updateSubmitHandler = async event => {
        event.preventDefault();

        try{
            await sendRequest(`${BASE_URL}/api/items/${serviceId}`,
                              'PATCH',
                              JSON.stringify({
                                  "service_name": formState.inputs.service_name.value
                              }),
                              {
                                  'Content-Type': 'application/json'
                              }
                            );
            history.push('/admin');
        }catch(err){}


    }

    return(
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {!isLoading && loadedService &&
            <form className="client-form" onSubmit={updateSubmitHandler}>
            <Input 
                id="service_name"
                element="input"
                type="text"
                label="Nume serviciu"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti serviciu"
                initialValue={loadedService.service_name}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Modifica</Button>
            </form>
        }
    </React.Fragment>
    );
}

export default UpdateService;