import React, {useState} from 'react';
import Button from '../../FormElements/Button';
import { useHistory } from 'react-router-dom';
import {
    VALIDATOR_EMAIL,
    VALIDATOR_REQUIRE,
    VALIDATOR_TYPE_EMAIL
} from '../../util/validators';
import Input from '../../FormElements/Input';
import { useForm } from '../../hooks/form-hook';
import { useHttpClient } from '../../hooks/http-hook';
import ErrorModal from '../../UIElements/ErrorModal';
import LoadingSpinner from '../../UIElements/LoadingSpinner';
import Modal from '../../UIElements/Modal';

import './ClientForm.css'

const NewClient = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [formState, inputHandler] = useForm(
        {
            tribunalul: {
                value: '',
                isValid: false
            },
            subsemnatul: {
                value: '',
                isValid: false
            },
            domiciliat: {
                value: '',
                isValid: false,
            },
            strada: {
                value: '',
                isValid: false,
            },
            numar: {
                value: '',
                isValid: false
            },
            bloc: {
                value: '',
                isValid: false
            },
            scara: {
                value: '',
                isValid: false
            },
            etaj: {
                value: '',
                isValid: false
            },
            apartament: {
                value: '',
                isValid: false
            },
            judet: {
                value: '',
                isValid: false
            },
            telefon: {
                value: '',
                isValid: false
            },
            act_ident: {
                value: '',
                isValid: false
            },
            act_ident_seria: {
                value: '',
                isValid: false
            }, 
            act_ident_numar: {
                value: '',
                isValid: false
            },
            cnp_nif: {
                value: '',
                isValid: false
            },
            eliberat: {
                value: '',
                isValid: false
            },
            eliberat_data: {
                value: '',
                isValid: false
            },
            calitate: {
                value: '',
                isValid: false
            },
            firma: {
                value: '',
                isValid: false
            },
            nr_ordine_rc: {
                value: '',
                isValid: false
            },
            cui: {
                value: '',
                isValid: false
            },
            sediu_domiciliat: {
                value: '',
                isValid: false
            },
            sediu_strada: {
                value: '',
                isValid: false
            },
            sediu_numar: {
                value: '',
                isValid: false
            }, 
            sediu_bloc: {
                value: '',
                isValid: false
            },
            sediu_scara: {
                value: '',
                isValid: false
            }, 
            sediu_etaj: {
                value: '',
                isValid: false
            },
            sediu_apartament: {
                value: '',
                isValid: false
            },
            sediu_judet: {
                value: '',
                isValid: false
            },
            sediu_cod: {
                value: '',
                isValid: false
            },
            sediu_cod_post: {   
                value: '',
                isValid: false
            },
            sediu_telefon: {
                value: '',
                isValid: false
            },
            sediu_telefon1: {
                value: '',
                isValid: false
            },
            sediu_fax: {
                value: '',
                isValid: false
            },
            sediu_fax1: {
                value: '',
                isValid: false
            },
            sediu_mail: {
                value: '',
                isValid: false
            },
            sediu_web: {
                value: '',
                isValid: false
            },
            declar_0: {
                value: '',
                isValid: false
            },
            declar_1: {
                value: '',
                isValid: false
            },
            declar_2: {
                value: '',
                isValid: false
            },
            declar_3: {
                value: '',
                isValid: false
            }, 
            data: {
                value: '',
                isValid: false
            }
        }, 
        false
    )

    const history = useHistory();

    const clientSubmitHandler = async event => {
        event.preventDefault();

        try {
            // const formData = new FormData();
            // formData.append('subsemnatul', formState.inputs.subsemnatul.value);
            // formData.append('domiciliat', formState.inputs.domiciliat.value);
            // formData.append('strada', formState.inputs.strada.value);
            // formData.append('numar', formState.inputs.numar.value);
            // // formData.append('bloc', formState.inputs.bloc.value);
            // // formData.append('scara', formState.inputs.scara.value);
            // // formData.append('etaj', formState.inputs.etaj.value);
            // // formData.append('apartament', formState.inputs.apartament.value);

            // // formData.append('judet', formState.inputs.judet.value);
            // // formData.append('telefon', formState.inputs.telefon.value);
            // // formData.append('act_ident', formState.inputs.act_ident.value);
            // // formData.append('act_ident_numar', formState.inputs.act_ident_numar.value);
            // // formData.append('act_ident_seria', formState.inputs.act_ident_seria.value);
            // // formData.append('cnp_nif', formState.inputs.cnp_nif.value);
            // // formData.append('eliberat', formState.inputs.eliberat.value);
            // // formData.append('eliberat_data', formState.inputs.eliberat_data.value);
            // // formData.append('calitate', formState.inputs.calitate.value);

            // // formData.append('firma', formState.inputs.firma.value);
            // // formData.append('nr_ordine_rc', formState.inputs.nr_ordine_rc.value);
            // // formData.append('cui', formState.inputs.cui.value);
            // // formData.append('sediu_domiciliat', formState.inputs.sediu_domiciliat.value);
            // // formData.append('sediu_strada', formState.inputs.sediu_strada.value);
            // // formData.append('sediu_numar', formState.inputs.sediu_numar.value);
            // // formData.append('sediu_bloc', formState.inputs.sediu_bloc.value);
            // // formData.append('sediu_scara', formState.inputs.sediu_scara.value);

            // // formData.append('sediu_etaj', formState.inputs.sediu_etaj.value);
            // // formData.append('sediu_apartament', formState.inputs.sediu_apartament.value);
            // // formData.append('sediu_judet', formState.inputs.sediu_judet.value);
            // // formData.append('sediu_cod', formState.inputs.sediu_cod.value);
            // // formData.append('sediu_cod_post', formState.inputs.sediu_cod_post.value);
            // // formData.append('sediu_telefon', formState.inputs.sediu_telefon.value);
            // // formData.append('sediu_telefon1', formState.inputs.sediu_telefon1.value);
            // // formData.append('sediu_fax', formState.inputs.sediu_fax.value);

            // // formData.append('sediu_fax1', formState.inputs.sediu_fax1.value);
            // // formData.append('sediu_mail', formState.inputs.sediu_mail.value);
            // // formData.append('sediu_web', formState.inputs.sediu_web.value);
            // // formData.append('declar_0', formState.inputs.declar_0.value);
            // // formData.append('declar_1', formState.inputs.declar_1.value);
            // // formData.append('declar_2', formState.inputs.declar_2.value);
            // // formData.append('declar_3', formState.inputs.declar_3.value);
            // // formData.append('data', formState.inputs.data.value);

            // // console.log(formData);

            await sendRequest(
                'http://localhost:5000/api/clients',
                'POST',
                JSON.stringify({
                    "tribunalul": formState.inputs.tribunalul.value,
                    "subsemnatul": formState.inputs.subsemnatul.value,
                    "domiciliat": formState.inputs.domiciliat.value,
                    "strada": formState.inputs.strada.value,
                    "numar": formState.inputs.numar.value,
                    "bloc": formState.inputs.bloc.value,
                    "scara": formState.inputs.scara.value,
                    "etaj": formState.inputs.etaj.value,
                    "apartament": formState.inputs.apartament.value,
                    "judet": formState.inputs.judet.value,
                    "telefon": formState.inputs.telefon.value,
                    "act_ident": formState.inputs.act_ident.value,
                    "act_ident_numar": formState.inputs.act_ident_numar.value,
                    "act_ident_seria": formState.inputs.act_ident_seria.value,
                    "cnp_nif": formState.inputs.cnp_nif.value,
                    "eliberat": formState.inputs.eliberat.value,
                    "eliberat_data": formState.inputs.eliberat_data.value,
                    "calitate": formState.inputs.calitate.value,
                    "firma": formState.inputs.firma.value,
                    "nr_ordine_rc": formState.inputs.nr_ordine_rc.value,
                    "cui": formState.inputs.cui.value,
                    "sediu_domiciliat": formState.inputs.sediu_domiciliat.value,
                    "sediu_strada": formState.inputs.sediu_strada.value,
                    "sediu_numar": formState.inputs.sediu_numar.value,
                    "sediu_bloc": formState.inputs.sediu_bloc.value,
                    "sediu_scara": formState.inputs.sediu_scara.value,
                    "sediu_etaj": formState.inputs.sediu_etaj.value,
                    "sediu_apartament": formState.inputs.sediu_apartament.value,
                    "sediu_judet": formState.inputs.sediu_judet.value,
                    "sediu_cod": formState.inputs.sediu_cod.value,
                    "sediu_cod_post": formState.inputs.sediu_cod_post.value,
                    "sediu_telefon": formState.inputs.sediu_telefon.value,
                    "sediu_telefon1": formState.inputs.sediu_telefon1.value,
                    "sediu_fax": formState.inputs.sediu_fax.value,
                    "sediu_fax1": formState.inputs.sediu_fax1.value,
                    "sediu_mail": formState.inputs.sediu_mail.value,
                    "sediu_web": formState.inputs.sediu_web.value,
                    "declar_0": formState.inputs.declar_0.value,
                    "declar_1": formState.inputs.declar_1.value,
                    "declar_2": formState.inputs.declar_2.value,
                    "declar_3": formState.inputs.declar_3.value,
                    "data": formState.inputs.data.value
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
             setShowSuccessModal(true);
             
        } catch(err){}
    }

    const hideSuccessModal = async (event) => {
        event.preventDefault();

        setShowSuccessModal(false);
        history.push('/');
    }

    return (
        <React.Fragment>
            <Modal
                show={showSuccessModal}
                onCancel={hideSuccessModal}
                header="Datele dumneavoastra au fost preluate cu succes."
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={hideSuccessModal}>OK</Button>
                    </React.Fragment>
                }
                >

            </Modal>
            <ErrorModal error={error} onClear={clearError} />
            <form className="client-form" onSubmit={clientSubmitHandler}>
                {isLoading && <LoadingSpinner asOverlay/>}
                <Input 
                    id="tribunalul"
                    element="input"
                    type="text"
                    label="Tribunalul"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam sa introduceti un tribunal valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="subsemnatul"
                    element="input"
                    type="text"
                    label="Subsemnatul"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un nume valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="domiciliat"
                    element="input"
                    type="text"
                    label="domiciliat (oras)"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un domiciliu valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="strada"
                    element="input"
                    type="text"
                    label="Strada"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o strada valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="numar"
                    element="input"
                    type="text"
                    label="Numar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="bloc"
                    element="input"
                    type="text"
                    label="Bloc"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un bloc valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="scara"
                    element="input"
                    type="text"
                    label="Scara"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o scara valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="etaj"
                    element="input"
                    type="text"
                    label="etaj"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un etaj valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="apartament"
                    element="input"
                    type="text"
                    label="Apartament"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un apartament valid"
                    onInput={inputHandler}
                />
                <Input
                    id="judet"
                    element="input"
                    type="text"
                    label="Judet"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un judet valid"
                    onInput={inputHandler} 
                />
                <Input 
                    id="telefon"
                    element="input"
                    type="text"
                    label="Telefon"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar de telefon valid"
                    onInput={inputHandler}
                />

                <Input 
                    id="act_ident"
                    element="input"
                    type="text"
                    label="Act identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un act de identitate valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="act_ident_seria"
                    element="input"
                    type="text"
                    label="Seria actului de identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o serie valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="act_ident_numar"
                    element="input"
                    type="text"
                    label="Numarul actului de identitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="cnp_nif"
                    element="input"
                    type="text"
                    label="CNP/NIF"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cnp/nif valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="eliberat"
                    element="input"
                    type="text"
                    label="eliberat de"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un ipj valid"
                    onInput={inputHandler}
                />
                <Input
                    id="eliberat_data"
                    element="input"
                    type="text"
                    label="la data"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o data valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="calitate"
                    element="input"
                    type="text"
                    label="Calitate"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o calitate valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="firma"
                    element="input"
                    type="text"
                    label="Firma"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o firma valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="nr_ordine_rc"
                    element="input"
                    type="text"
                    label="Numar ordine RC"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un nr ordine valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="cui"
                    element="input"
                    type="text"
                    label="CUI"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cui valid"
                    onInput={inputHandler}
                />

                <Input 
                    id="sediu_domiciliat"
                    element="input"
                    type="text"
                    label="Sediu domiciliat (oras)"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un sediu valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_strada"
                    element="input"
                    type="text"
                    label="strada"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o strada valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_numar"
                    element="input"
                    type="text"
                    label="numar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un numar valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_bloc"
                    element="input"
                    type="text"
                    label="bloc"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un bloc valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_scara"
                    element="input"
                    type="text"
                    label="scara"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o scara valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_etaj"
                    element="input"
                    type="text"
                    label="etaj"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un etaj valid"
                    onInput={inputHandler}
                />
                <Input
                    id="sediu_apartament"
                    element="input"
                    type="text"
                    label="apartament"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un apartament valid"
                    onInput={inputHandler} 
                />
                <Input 
                    id="sediu_judet"
                    element="input"
                    type="text"
                    label="judet"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un judet valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_cod"
                    element="input"
                    type="text"
                    label="cod"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cod valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_cod_post"
                    element="input"
                    type="text"
                    label="cod postal"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un cod postal valid"
                    onInput={inputHandler}
                />

                <Input 
                    id="sediu_telefon"
                    element="input"
                    type="text"
                    label="telefon"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un telefon valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_telefon1"
                    element="input"
                    type="text"
                    label="telefon suplimentar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un telefon valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_fax"
                    element="input"
                    type="text"
                    label="fax"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un fax valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_fax1"
                    element="input"
                    type="text"
                    label="fax auxiliar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un fax valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_mail"
                    element="input"
                    type="text"
                    label="email"
                    validators={[VALIDATOR_REQUIRE, VALIDATOR_EMAIL]}
                    errorText="Va rugam introduceti un email valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="sediu_web"
                    element="input"
                    type="text"
                    label="website"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti un website valid"
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_0"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_1"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_2"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="declar_3"
                    element="input"
                    type="text"
                    label="declar"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o declaratie valida"
                    onInput={inputHandler}
                />
                <Input 
                    id="data"
                    element="input"
                    type="text"
                    label="data"
                    validators={[VALIDATOR_REQUIRE]}
                    errorText="Va rugam introduceti o data valida"
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>ADAUGA CLIENT</Button>
            </form>
        </React.Fragment>
    );
};

export default NewClient;