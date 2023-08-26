import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	email: yup.string().email('Email format is not valid').required('Email is required'),
	channel: yup.string().required('Channel is required')
});

const MuiForm = () => {
	const { register, handleSubmit, formState, reset, trigger } = useForm({
		defaultValues: {
			username: '',
			email: '',
			channel: ''
		},
		resolver: yupResolver(validationSchema),
		shouldFocusError: true,
		mode: 'all'
	});
	const { errors } = formState;
	console.log(formState);

	const onSubmit = data => {
		console.log('SUBMTI SUCCESSFUL!!');
		console.log(data);
	};

	const onError = error => {
		console.log('ERROR!!');
		console.log(error);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
			<Stack spacing={2} useFlexGap width={400} sx={{ marginInline: 'auto' }}>
				<TextField
					label='Username'
					type='text'
					{...register('username')}
					error={!!errors.username}
					helperText={errors.username?.message}
					variant='standard'
				/>

				<TextField
					label='Email'
					type='email'
					{...register('email')}
					error={!!errors.email}
					helperText={errors.email?.message}
					variant='filled'
				/>

				<TextField
					label='Channel'
					type='text'
					{...register('channel')}
					error={!!errors.channel}
					helperText={errors.channel?.message}
					variant='outlined'
				/>

				<Stack direction='row' spacing={1} mt={2}>
					<Button type='submit' variant='contained' color='primary'>
						Submit
					</Button>
					<Button type='button' variant='outlined' color='secondary' onClick={() => trigger()}>
						Validate
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
