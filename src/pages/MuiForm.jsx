import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormHelperText, FormLabel, Stack, TextField } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useController, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';

import './muiForm.scss';
import dayjs from 'dayjs';

const validationSchema = yup.object({
	username: yup.string().trim().required('Username is required'),
	email: yup
		.string()
		.trim()
		.email('Email format is not valid')
		.when('$showEmail', (showEmail, schema) => (showEmail[0] ? schema.required('Email is required') : schema)),
	doj: yup.date().required('DOJ is required')
});

const TextInput = ({ name, control, ...rest }) => {
	const {
		field: { ref, ...restField },
		fieldState: { invalid, error }
	} = useController({
		name,
		control
	});

	return <TextField error={invalid} helperText={error?.message} {...restField} {...rest} />;
};

const getElements = showEmail => [
	{
		label: 'Username',
		type: 'text',
		name: 'username'
	},
	...(showEmail
		? [
				{
					label: 'Email',
					type: 'email',
					name: 'email'
				}
		  ]
		: [])
];

const MuiForm = () => {
	const [showEmail, setShowEmail] = useState(false);
	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			username: '',
			email: '',
			doj: null
		},
		resolver: yupResolver(validationSchema),
		shouldFocusError: true,
		mode: 'all',
		shouldUnregister: true,
		context: { showEmail }
	});

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<Stack spacing={2} useFlexGap width={400} sx={{ marginInline: 'auto' }}>
				{getElements(showEmail).map(elem => (
					<TextInput key={elem.name} {...elem} control={control} />
				))}

				<Controller
					name='doj'
					control={control}
					render={({ field, fieldState: { invalid, error } }) => (
						<FormControl error={invalid} variant='outlined'>
							<FormLabel required>Choose DOJ</FormLabel>
							<DateCalendar {...field} disableFuture />
							{error?.message && <FormHelperText>{error.message}</FormHelperText>}
						</FormControl>
					)}
				/>

				<Stack direction='row' spacing={1} mt={2}>
					<Button type='submit' variant='contained' color='primary' className='submit-btn'>
						Submit
					</Button>
					<Button type='button' variant='outlined' color='secondary' onClick={() => setShowEmail(prev => !prev)}>
						Toggle Email
					</Button>
					<Button type='reset' variant='text' color='warning' onClick={reset}>
						Reset
					</Button>
				</Stack>
			</Stack>
		</form>
	);
};

export default MuiForm;
