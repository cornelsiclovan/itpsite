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


const UpdateTelephone = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedTelephone, setLoadedTelephone] = useState();
    const telephoneId = useParams().id;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm({
        telefon: {
            value: "",
            isValid: false
        }  
    },
    false
    );

    useEffect(() => {
        const fetchTelephone = async () => {
            try {
                const responseData = await sendRequest(`http://localhost:5000/api/contacts/${telephoneId}`)
                setLoadedTelephone(responseData.contact);

                setFormData(
                    {
                        telefon : {
                            value: responseData.contact.telefon,
                            isValid: true
                        }
                    },
                    true
                );

            } catch(err){}
        }

        fetchTelephone();
    }, [sendRequest, telephoneId, setFormData]);   

    const updateSubmitHandler = async event => {
        event.preventDefault();
        console.log(formState.inputs.telefon.value);

        try{
            await sendRequest(`http://localhost:5000/api/contacts/${telephoneId}`,
                              'PATCH',
                              JSON.stringify({
                                  "telefon": formState.inputs.telefon.value
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
            {!isLoading && loadedTelephone &&
                <form className="client-form" onSubmit={updateSubmitHandler}>
                <Input 
                    id="telefon"
                    element="input"
                    type="text"
                    label="Telefon"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar de telfon"
                    initialValue={loadedTelephone.telefon}
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>Modifica</Button>
                </form>
            }
        </React.Fragment>
    );
}

export default UpdateTelephone;