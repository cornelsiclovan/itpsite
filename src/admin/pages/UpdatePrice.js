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

const UpdatePrice = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPrice, setLoadedPrice] = useState();
    const priceId = useParams().id;
    const history = useHistory();

    const [formState, inputHandler, setFormData] = useForm({
        name: {
            value: "",
            isValid: false
        },
        price: {
            value: "",
            isValid: false
        },
        currency: {
            value: "",
            isValid: false
        },
        image: {
            value: "",
            isValid: false
        },
        
    },
    false
    );

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const responseData = await sendRequest(`${BASE_URL}/api/services/${priceId}`)
                setLoadedPrice(responseData.service);

                setFormData(
                    {
                        name : {
                            value: responseData.service.name,
                            isValid: true
                        },
                        price: {
                            value: responseData.service.price,
                            isValid: true
                        },
                        currency: {
                            value: responseData.service.currency,
                            isValid: true
                        },
                        image: {
                            value: responseData.service.image,
                            isValid: true
                        }
                    },
                    true
                );

            } catch(err){}
        }

        fetchPrice();
    }, [sendRequest, priceId, setFormData]);   

    const updateSubmitHandler = async event => {
        event.preventDefault();

        try{
            await sendRequest(`${BASE_URL}/api/services/${priceId}`,
                              'PATCH',
                              JSON.stringify({
                                  "name": formState.inputs.name.value,
                                  "price": formState.inputs.price.value,
                                  "currency": formState.inputs.currency.value,
                                  "image": formState.inputs.image.value
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
        {!isLoading && loadedPrice &&
            <form className="client-form" onSubmit={updateSubmitHandler}>
            <Input 
                id="name"
                element="input"
                type="text"
                label="Nume"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti serviciu"
                initialValue={loadedPrice.name}
                onInput={inputHandler}
            />
            <Input 
                id="price"
                element="input"
                type="text"
                label="Pret"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti pretul"
                initialValue={loadedPrice.price}
                onInput={inputHandler}
            />
            <Input 
                id="currency"
                element="input"
                type="text"
                label="Valuta"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti valuta"
                initialValue={loadedPrice.currency}
                onInput={inputHandler}
            />
            <Input 
                id="image"
                element="input"
                type="text"
                label="link imagine"
                validators={[VALIDATOR_REQUIRE]}
                errorText="Va rugam introduceti serviciu"
                initialValue={loadedPrice.image}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>Modifica</Button>
            </form>
        }
    </React.Fragment>
    )
}

export default UpdatePrice;