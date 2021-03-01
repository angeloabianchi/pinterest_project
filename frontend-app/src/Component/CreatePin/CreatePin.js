import React, {useState} from 'react';
import './CreatePin.css';
import add_circle from './Icons/add_circle.svg';
import Api from "../../api";
import {Button, Dialog, TextField, MenuItem} from "@material-ui/core";
import {useAppContext} from "../../Context";
import {useParams} from 'react-router-dom';

const CreatePin = props => {
    const params = useParams();
    const {showModal, setShowModal} = useAppContext();    /* para mostrar ou esconder o modal (pop-up) */
    const [pin, setPin] = useState({title: '', description: '', imgUrl: '', boardId: params.boardId, userId: params.userId});
    const [formError, setFormError] = useState({title: false, description: false, imgUrl: false});
    const [boards, setBoards] = useState('');
    const [users, setUsers] = useState('');
    const [isFetching, setIsFetching] = useState(true);     /* me serve para ver quando estou carregando dados */

    const fetchBoards = () => {             /* cojer las boards */
        Api.getBoards(boards).then(res => {
            setBoards(res);
            setIsFetching(false);
            })
    }

    const fetchUsers = () => {              /* cojer los users */
        Api.getUsers(users).then(res => {
            setUsers(res);
            setIsFetching(false);
        })
    }

    if(isFetching) {        /* se está fetching, me hace el fetchBoards y fetchUsers  */
        fetchBoards();      /* nesse if tenho que fazer com que mostre os pins novos quando feito o upload sem que seja necessario recarregar a página */
        fetchUsers();
    }

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
        Object.keys(pin).forEach(key => {
            errors[key] = pin[key] === '';  /* <-- caso haja erros, mudar o valor da 'key' (name, email ou password) para true */
        });                   /* <--- esta función 'Object.keys(data)' me devolve somente as keys de uma array, que no caso é o 'user'. forEach -> para cada 'key' */

        if (!formHasError(errors)) {
            Api.createPin(pin).then(res => {
                setShowModal(false);
                setPin({title: '', description: '', imgUrl: ''});
            })
        }else{
            setFormError(errors);
        }
    }

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleClickOpen = () => {
        setShowModal(true);
    }

    const handleClickClose = () => {
        setShowModal(false);
        setPin({title: '', description: '', imgUrl: ''});
        setFormError({title: false, description: false, imgUrl: false});
    }

    const handleChange = (key, newValue) => {
        setPin({...pin, [key]: newValue});
    }


    return (
        <div className="Register">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
            <Dialog open={showModal} onClose={handleClickClose} >
                <form className="Form">
                    <div className="Title">Crear Pin</div>
                    {Object.keys(pin).filter(obj => obj === 'title' || obj === 'description' || obj === 'imgUrl').map(key => (
                        <TextField
                            required
                            helperText={formError[key] ? "A pin needs a " + capitalize(key) : ''}
                            type={key}
                            error={formError[key]}
                            value={pin[key]}
                            label={capitalize(key)}
                            variant="outlined"
                            onChange={e => handleChange(key, e.target.value)} />
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

export default CreatePin;