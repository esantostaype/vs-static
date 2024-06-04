import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Notification } from '../components';
import { Arrow } from './ui/Icons';
import { useState } from 'react';
import { Spinner } from './ui/Spinner';

interface FormData {
	fullName: string,
    phone: string,
    email: string,
    comments: string
}

const SignupSchema = Yup.object().shape({
	fullName: Yup.string()
		.min( 2, 'Tu nombre completo debe tener al menos 2 caracteres' )
		.max( 48, 'Tu nombre completo no debe ser mayor a 48 caracteres' )
		.required( 'Este campo es requerido' ),
	phone: Yup.string()
		.matches(/^[9]\d{8}$/, 'No es teléfono válido')
		.required( 'Este campo es requerido' ),
	email: Yup.string()
		.email('No es un Email válido')
		.required( 'Este campo es requerido' ),
	comments: Yup.string()
		.required( 'Este campo es requerido' ),
	
});

export const ContactForm = () => {

    const [ loading, setLoading ] = useState( false );
    const [ submitted, setSubmitted ] = useState( false );

    return (
        <Formik
			initialValues={{
				fullName: '',
				phone: '',
				email: '',
				comments: ''
			}}
			validationSchema={ SignupSchema }
			onSubmit={
				async( values: FormData, { setSubmitting, resetForm } ) => {
				}
			}
			>
			{({ errors, touched, values, isSubmitting }) => (
				<Form className='form'>
					<div className={ `submitting ${ loading && 'active' }` }>
						<Spinner/>
					</div>
					{
						submitted &&
						<Notification type="success" message="¡Gracias por ponerte en contacto con nosotros! Pronto nos comunicaremos contigo para proporcionarte la información que necesitas." />
					}
					<div className='form__item__full'>
						<TextField
							label="Nombre Completo"
							type="text"
							name="fullName"
							placeholder="Ingresa tu Nombre Completo"
							errors={ errors.fullName }
							touched={ touched.fullName }
							value={ values.fullName }
						/>
					</div>
					<div className='form__item'>
						<TextField
							label="Teléfono"
							type="tel"
							name="phone"
							placeholder="Ingresa tu Teléfono"
							errors={ errors.phone }
							touched={ touched.phone }
							value={ values.phone }
						/>
					</div>
					<div className='form__item'>
						<TextField
							label="Email"
							type="email"
							name="email"
							placeholder="Ingresa tu Email"
							errors={ errors.email }
							touched={ touched.email }
							value={ values.email }
						/>
					</div>
					<div className='form__item__full'>
						<TextField
							typeField="textarea"
							label="Comentarios"
							name="comments"
							placeholder="Ingresa tus Comentarios"
							errors={ errors.comments }
							touched={ touched.comments }
							value={ values.comments }
						/>
					</div>
					<div className='form__item__full'>
						<Button label='Enviar Información' size='main' disabled={ isSubmitting }/>
					</div>
				</Form>
			)}
		</Formik>
    )
}