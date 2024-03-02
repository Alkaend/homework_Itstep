import { useState } from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ labelText, type = 'text', name, pattern, setInvalidInputsCount }) => {
    const [isValid, setIsValid] = useState(false);

    const handleInput = e => {

        const isValidValue = e.target.checked;

        setIsValid(isValidValue);
        setInvalidInputsCount(prevInvalidCount => {
            if (isValid === isValidValue) return prevInvalidCount;

            return prevInvalidCount + (isValidValue ? -1 : 1);
        })
    }

    return (
        <label className={styles['form-input']}>
            {labelText}
            <input
                type='checkbox'
                name={name}
                data-is-valid={isValid}
                onInput={handleInput}
            />
        </label>
    )
}

export default FormInput;