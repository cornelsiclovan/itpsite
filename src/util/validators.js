import { useDebugValue } from "react";

const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_EMAIL   = 'EMAIL';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_MAXLENGTH = () => ({ type: VALIDATOR_TYPE_MAXLENGTH });

export const validate = (value, validators) => {
    let isValid = true;

    for(const validator of validators) {
        if(validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if(validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value); 
        } 
        if(validator.type === VALIDATOR_TYPE_MAXLENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
    }

    return isValid;
};