import React, {useState} from 'react';
import Api from "../../api";
import {Button, Dialog, TextField, Textfield} from "@material-ui/core";
import {useAppContext} from "../../Context";
import {useParams} from "react-router-dom";

const CreateBoard = props => {
    const params = useParams();
    const {showModal, setShowModal} = useAppContext();
    const [board, setBoard] = useState({title: '', description: '', category: '', userId: params.userId});
    const [formError, setFormError] = useState({title: false, description: false, category: false});

    const formHasError = (errors) => {
        let error = false;
        Object.values(errors).forEach(value => {
            if(value) {
                error = true;
            }
        });
        return error;
    }

    const sendData = () => {
        const errors = {};
        Object.keys(board).forEach(key => {
            errors[key] = board[key] === '';
        });

        if(!formHasError(errors)) {
            Api.createBoard(board).then(res => {
                setShowModal(false);
                setBoard({title: '', description: '', category: ''});
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
        setBoard({title: '', description: '', category: ''});
        setFormError({title: false, description: false, category: false});
    }

    const handleChange = (key, newValue) => {
        setBoard({...board, [key]: newValue});
    }

    return(
        <div className="Register">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>+</Button>
            <Dialog open={showModal} onClose={handleClickClose} >
                <form className="Form">
                    <div className="Title">Crear Board</div>
                    {Object.keys(board).filter(obj => obj !== 'userId').map(key => (
                        <TextField
                            required
                            helperText={formError[key] ? "A board needs a " + capitalize(key) : ''}
                            type={key}
                            error={formError[key]}
                            value={board[key]}
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
    )
}

export default CreateBoard;