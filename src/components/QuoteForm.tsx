import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField, Notification } from "../components";
import { useState } from "react";
import { Spinner } from "./ui/Spinner";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  comments: string;
}

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Tu nombre completo debe tener al menos 2 caracteres")
    .max(48, "Tu nombre completo no debe ser mayor a 48 caracteres")
    .required("Este campo es requerido"),
  phone: Yup.string()
    .matches(/^[9]\d{8}$/, "No es teléfono válido")
    .required("Este campo es requerido"),
  email: Yup.string()
    .email("No es un Email válido")
    .required("Este campo es requerido"),
  comments: Yup.string().required("Este campo es requerido"),
});

export const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false)

  return (
    <Formik
      initialValues={{
        fullName: "",
        phone: "",
        email: "",
        comments: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          setError(false)
          const response = await fetch(`${ import.meta.env.PUBLIC_API_URL }/contact-us`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(values),
            mode: 'cors',
            credentials: 'same-origin'
          })

          let data
          try {
            data = await response.json()
          } catch (e) {
            console.error('Error parsing response:', e)
            throw new Error('Invalid server response')
          }

          if (!response.ok) {
            throw new Error(data.error || 'Failed to send email')
          }

          setSubmitted(true)
          resetForm()
          setTimeout(() => setSubmitted(false), 8000)
        } catch (error) {
          console.error('Error sending email:', error)
          setError(true)
          setTimeout(() => setError(false), 8000)
        } finally {
          setSubmitting(false)
        }
      }}
    >
      {({ errors, touched, values, isSubmitting }) => (
        <Form className="form">
          <div className={`submitting ${ isSubmitting ? "active" : "" }`}>
            <Spinner />
          </div>
          {submitted && (
            <Notification
              type="success"
              message="¡Gracias por solicitar una cotización! Pronto nos comunicaremos contigo para proporcionarte la información que necesitas."
            />
          )}
          {error && (
            <Notification
              type="error"
              message="¡No pudimos enviar tu mensaje, inténtalo nuevamente más tarde o envíanos un email a contacto@itsoluciones.pe"
            />
          )}
          {/* <div className="form__item__full">
            <TextField
              options={serviceOptions}
              asSelect
              label="Servicio"
              name="service"
              errors={errors.service}
              touched={touched.service}
            />
          </div> */}
          <div className="form__item__full">
            <TextField
              label="Nombre Completo"
              type="text"
              name="fullName"
              placeholder="Ingresa tu Nombre Completo"
              errors={errors.fullName}
              touched={touched.fullName}
              value={values.fullName}
            />
          </div>
          <div className="form__item">
            <TextField
              label="Teléfono"
              type="tel"
              name="phone"
              placeholder="Ingresa tu Teléfono"
              errors={errors.phone}
              touched={touched.phone}
              value={values.phone}
            />
          </div>
          <div className="form__item">
            <TextField
              label="Email"
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              errors={errors.email}
              touched={touched.email}
              value={values.email}
            />
          </div>
          <div className="form__item__full">
            <TextField
              typeField="textarea"
              label="Descripción de tu Proyecto"
              name="comments"
              placeholder="Háblanos un poco acerca de tu proyecto"
              errors={errors.comments}
              touched={touched.comments}
              value={values.comments}
            />
          </div>
          {/* <div className='form__item__full'>
                    <Field 
                        name="files" 
                        type="file" 
                        onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                helpers.setValue(event.currentTarget.files[0]);
                            }
                        }
                    />
					</div> */}
          <div className="form__item__full">
            <Button
              label="Solicitar Cotización"
              size="main"
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
