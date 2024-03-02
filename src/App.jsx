import './App.css';
import Form from './components/Form/Form.jsx';

const App = () => {
	const handleSubmit = formData => {
		console.log(formData);
	}

	const checkboxesData = [
		{
			name: 'Some name',
			min: 0,
			max: 0,
			children: [
				{
					label: 'Some label',
					value: 'Some value'
				},
				{
					label: 'Some label',
					value: 'Some value'
				},
				
			]
		},
		{
			name: 'Some name',
			min: 0,
			max: 0,
			children: [
				{
					label: 'Some label',
					value: 'Some value'
				},
				{
					label: 'Some label',
					value: 'Some value'
				},
				
			]
		},
		
	]
	.map(inputData => {
		inputData.id = crypto.randomUUID();

		return inputData;
	})

	return (
		<Form onSubmit={handleSubmit} checkboxesData={checkboxesData} />
	);
}

export default App;