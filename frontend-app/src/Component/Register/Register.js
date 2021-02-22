import React, { useState } from 'react';
import './Register.css';
import Api from "../../api";
import { Button, TextField, Dialog } from "@material-ui/core";


const Register = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const [formError, setFormError] = useState({name: false, email: false, password: false})

    const formHasError = (errors) => {
        let error = false;
        Object.values(errors).forEach(value => {     /* <--- esta función 'Object.keys(formError)' me devolve somente as values de uma array, que no caso é o 'formError'. forEach -> para cada 'value' */
            if(value) {
                error = true;
            }
        });
        return error;
    }

    const sendData = () => {
        const errors = {};
        Object.keys(user).forEach(key => {
            errors[key] = user[key] === '';  /* <-- caso haja erros, mudar o valor da 'key' (name, email ou password) para true */
        });                   /* <--- esta función 'Object.keys(data)' me devolve somente as keys de uma array, que no caso é o 'user'. forEach -> para cada 'key' */

        if (!formHasError(errors)) {
            Api.createUsers(user).then(res => {
                setShowModal(false);
                setUser({name: '', email: '', password: ''})
            })
        }else{
            setFormError(errors);
        }
    }

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleClickOpen = () => {
        setShowModal (true);
    }

    const handleClickClose = () => {
        setShowModal(false);
        setUser({name: '', email: '', password: ''});
        setFormError({name: false, email: false, password: false});
    }

    const handleChange = (key, newValue) => {
        setUser({...user, [key]: newValue});
    }

    return (
        <div className="Register">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Crear Cuenta</Button>
            <Dialog open={showModal} onClose={handleClickClose} >
                <form className="Form">
                    <div className="Title">Registrar</div>
                    {Object.keys(user).map(key => (
                        <TextField helperText={formError[key] ? "A user needs a " + capitalize(key) : ''} type={key} error={formError[key]} value={user[key]} required label={capitalize(key)} variant="outlined" onChange={e => handleChange(key, e.target.value)} />
                    ))}
                    <div className="SendCancel">
                        <Button variant="contained" color="primary" size="large" onClick={sendData}>Enviar</Button>
                        <Button variant="contained" color="Default" size="large" onClick={handleClickClose}>Cancelar</Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
};

export default Register;