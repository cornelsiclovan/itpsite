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

const UpdateContact = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedProgram, setLoadedProgram] = useState();
    const programId = useParams().id;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm({
        tip_program: {
            value: "",
            isValid: false
        },
        deschidere: {
            value: "",
            isValid: false
        },
        inchidere: {
            value: "",
            isValid: false
        },
        
    },
    false
    );

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/programs/${programId}`)
                setLoadedProgram(responseData.program);

                setFormData(
                    {
                        tip_program : {
                            value: responseData.program.tip_program,
                            isValid: true
                        },
                        deschidere: {
                            value: responseData.program.deschidere,
                            isValid: true
                        },
                        inchidere: {
                            value: responseData.program.inchidere,
                            isValid: true
                        }
                    },
                    true
                );

            } catch(err){}
        }

        fetchContact();
    }, [sendRequest, programId, setFormData]);    

    const updateSubmitHandler = async event => {
        event.preventDefault();

        try{
            await sendRequest(`${BASE_URL}/api/programs/${programId}`,
                              'PATCH',
                              JSON.stringify({
                                  "tip_program": formState.inputs.tip_program.value,
                                  "inchidere": formState.inputs.inchidere.value,
                                  "deschidere": formState.inputs.deschidere.value,
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
        {!isLoading && loadedProgram &&
            <form className="client-form" onSubmit={updateSubmitHandler}>
            <Input 
                id="tip_program"
                element="input"
                type="text"
                label="Tip program"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti tipul programului"
                initialValue={loadedProgram.tip_program}
                onInput={inputHandler}
            />
            <Input 
                id="deschidere"
                element="input"
                type="text"
                label="Deschidere"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Ora deschiderii"
                initialValue={loadedProgram.deschidere}
                onInput={inputHandler}
            />
            <Input 
                id="inchidere"
                element="input"
                type="text"
                label="Inchidere"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Ora inchiderii"
                initialValue={loadedProgram.inchidere}
                onInput={inputHandler}
            />

            <Button type="submit" disabled={!formState.isValid}>Modifica</Button>
            </form>
        }
    </React.Fragment>
    );
}

export default UpdateContact;