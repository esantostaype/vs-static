import { useState, type FC, type ChangeEvent, useEffect } from 'react';
import { ErrorMessage, Field } from 'formik';
import styles from './TextField.module.css';

interface Select {
    value: string;
    label: string;
}

interface Props {
    label?: string;
    type?: string;
    typeField?: string;
    name: string;
    placeholder?: string;
    asSelect?: boolean;
    options?: Select[];
    errors?: string | undefined;
    touched?: boolean | undefined;
    value?: string;
    onChange?: ( e: ChangeEvent<any> ) => void;
}

export const TextField:FC<Props> = ({
    label,
    type,
    typeField,
    name,
    placeholder,
    asSelect,
    options,
    errors,
    touched,
    value,
    onChange
}) => {

    const [ isActive, setIsActive ] = useState( false );
    const [ isFilled, setIsFilled ] = useState( false );

    useEffect(() => {
        setIsFilled( !!value );
    }, [ value ]);

    const handleFieldFocus = () => {
        setIsActive(true);
    };

    const handleFieldBlur = () => {
        setIsActive(false);
    };

    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(!!e.target.value);
        if (onChange) {
            onChange(e);
        }
    };  

    return (
        <div
            className={
                `${ styles.control }
                ${ isActive ? styles.isActive : '' }
                ${ asSelect ? styles.isActive : '' }
                ${ isFilled ? styles.isFilled : '' }
                ${ typeField === 'file' ? styles.isFilled : '' }
                ${ value ? styles.isFilled : '' }
                ${ errors && touched ? ( styles.isError ) : ( styles.isValid ) }`
            }
            onFocus={ handleFieldFocus }
            onBlur={ handleFieldBlur }
            onChange={ handleFieldChange }
        >
            <label htmlFor={ name } className={ styles.label }>{ label }</label>
            {asSelect ? (
                <Field as="select" name={name} className={styles.field} autoComplete="off" isClearable={true}>
                    {options &&
                        options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </Field>
            ) : typeField === 'file' ? (
                <input type="file" name={name} className={styles.field} />
            ) : (
                <Field
                    as={typeField}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className={styles.field}
                    autoComplete="off"
                />
            )}
            <ErrorMessage
                name={ name }
                component="span"
                className={ `fadeIn ${ styles.errors }` }
            />
        </div>
    );
};