import Form from './components/Form/Form';
import Timer from './components/Timer/Timer';

export type InputData = {
    labelText: string;
    name: string;
    type: string;
    pattern: string;
    id?: string;
}

const App = () => {
    const handleSubmit = (formData: FormData) => {
        console.log(formData);
    }

    const inputsData: InputData[] = [
        {
            labelText: 'Name:',
            name: 'name',
            type: 'text',
            pattern: '\\w{1,4}'
        },
        {
            labelText: 'Surname:',
            name: 'surname',
            type: 'text',
            pattern: '\\w{1,5}'
        },
        {
            labelText: 'Middle name:',
            name: 'middle-name',
            type: 'text',
            pattern: '\\w{1,6}'
        },
        {
            labelText: 'Middle name:',
            name: 'middle-name',
            type: 'text',
            pattern: '\\w{1,7}'
        }
    ].map((inputData: InputData) => {
        inputData.id = crypto.randomUUID();

        return inputData;
    })

    return (
        <>
            <Timer />
        </>
    );
}

export default App;