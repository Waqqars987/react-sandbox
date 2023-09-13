import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { unstable_usePrompt as usePrompt } from 'react-router-dom';
import * as yup from 'yup';

// import { useBeforeUnload } from '../hooks/router';
import './reactHookForm.scss';

const validationSchema = yup.object({
	username: yup.string().required('Username is required'),
	email: yup.string().email('Email format is not valid').required('Email is required'),
	channel: yup.string().required('Channel is required')
});

const MuiForm = () => {
	const { register, handleSubmit, formState, control, reset, trigger } = useForm({
		defaultValues: {
			username: '',
			email: '',
			channel: ''
		},
		resolver: yupResolver(validationSchema),
		shouldFocusError: true,
		mode: 'all'
	});
	const { errors, isDirty } = formState;

	const onSubmit = data => {
		console.log('SUBMTI SUCCESSFUL!!');
		console.log(data);
	};

	const onError = error => {
		console.log('ERROR!!');
		console.log(error);
	};

	usePrompt({
		when: () => isDirty,
		message: 'Are you sure?'
	});

	// useBeforeUnload({
	// 	when: isDirty,
	// 	message: 'Are you sure you want to leave?'
	// });

	return (
		<div className='react-hook-form'>
			<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
				<div className='form-control'>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' {...register('username')} />
					<p className='error'>{errors.username?.message}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='email'>E-mail</label>
					<input type='email' id='email' {...register('email')} />
					<p className='error'>{errors.email?.message}</p>
				</div>

				<div className='form-control'>
					<label htmlFor='channel'>Channel</label>
					<input type='text' id='channel' {...register('channel')} />
					<p className='error'>{errors.channel?.message}</p>
				</div>

				<div className='btn-group'>
					<button type='submit'>Submit</button>
					<button type='button' onClick={() => trigger()}>
						Validate
					</button>
					<button type='reset' onClick={reset}>
						Reset
					</button>
				</div>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default MuiForm;
