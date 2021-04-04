import { Grid, TextField, makeStyles} from '@material-ui/core';
import React, { useState } from 'react';
import './TestStandardForm.css'

const initialValues = {
    standardID: '',
    standardName: '',
    description: '',
    publishedDate: ''
}


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root, & .MuiFormGroup-root, & .MuiFormLabel-root, & .MuiInputBase-root, & .MuiFormControl-root': {
            width: '90%',
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

export default function TestStandardForm(props: IDonationProps) {


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
        <div className="donation-div">
            <div className="reg-header"><span className="reg-header-title">Test Standard Form</span></div>
            <div className="reg-form donation-form">
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>
                            <TextField
                                variant="outlined"
                                label="Standard ID"
                                value={values.standardID}
                                name="standardID"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Standard Name"
                                name="standardName"
                                value={values.standardName}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Description"
                                name="description"
                                value={values.description}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Published Date"
                                name="publishedDate"
                                value={values.publishedDate}
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

