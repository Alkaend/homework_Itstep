import { useState } from 'react';
import styles from './Form.module.scss';
import FormInput from "./FormInput/FormInput.jsx";

const Form = ({ onSubmit,  checkboxesData }) => {
    const [invalidInputsCount, setInvalidInputsCount] = useState(checkboxesData.length);

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        onSubmit(formData);
    }

    const inputs = checkboxesData.map(
        inputData => <FormInput
            {...inputData}
            setInvalidInputsCount={setInvalidInputsCount}
            key={inputData.id}
        />
    )

    console.log(invalidInputsCount);

	return (
		<form onSubmit={handleSubmit} className={[
            styles.form,
            styles[`form--${invalidInputsCount === 0 ? '' : 'in'}valid`]
        ].join(' ')}>
			<legend>Full name</legend>

            {inputs}

            <button type="submit">Submit</button>
		</form>
	);
}

export default Form;