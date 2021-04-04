import { Grid, TextField, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import './ClientForm.css'

const initialValues = {
    clientId: Math.floor(100000 + Math.random() * 900000),
    clientCode: '',
    clientName: '',
    clientType: ''
}


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root, & .MuiFormGroup-root, & .MuiFormLabel-root, & .MuiInputBase-root, & .MuiFormControl-root': {
            width: '98%',
            margin: theme.spacing(1)
        }
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
    },
    table: {
        '& .MuiTextField-root, & .MuiFormGroup-root, & .MuiFormLabel-root, & .MuiInputBase-root, & .MuiFormControl-root': {
            width: '100%',
            minWidth: '70px',
            margin: 0
        }

    },

}))

interface IDonationProps {

}

export default function ClientForm(props: IDonationProps) {


    const [values, setValues] = useState(initialValues)
    const classes = useStyle()

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()

    }


    return (
        <div className="donation-div common-form-div">
            <div className="reg-header"><span className="reg-header-title">Client Form</span></div>
            <div className="reg-form donation-form">
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>


                            <TextField
                                variant="outlined"
                                label="Client ID"
                                value={values.clientId}
                                name="clientId"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Client Code"
                                name="clientCode"
                                value={values.clientCode}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Client Name"
                                name="clientName"
                                value={values.clientName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Client Type"
                                name="clientType"
                                value={values.clientType}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <div className="register-submit">
                            <button className="submit-btn">Submit</button>
                            <button className="reset-btn">Reset</button>
                        </div>
                    </Grid>
                </form>
            </div>

        </div>
    );
}

