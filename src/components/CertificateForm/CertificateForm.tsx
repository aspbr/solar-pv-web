import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import React, { useState } from 'react';
import './CertificateForm.css'

const initialValues = {
    certificateId: '',
    certificateNumber: '',
    location: '',
    reportNumber: '',
    contactId: '',
    testStandardId: '',
    productId: '',
    certIssueDate: ''
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

export default function CertificateForm(props: IDonationProps) {


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
            <div className="reg-header"><span className="reg-header-title">Certificate Form</span></div>
            <div className="reg-form donation-form">
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>
                            <TextField
                                variant="outlined"
                                label="Certificate ID"
                                value={values.certificateId}
                                name="certificateId"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Certificate Number"
                                name="certificateNumber"
                                value={values.certificateNumber}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Location"
                                name="location"
                                value={values.location}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Report Number"
                                name="reportNumber"
                                value={values.reportNumber}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Contact ID"
                                name="contactId"
                                value={values.contactId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Test Standard ID"
                                name="testStandardId"
                                value={values.testStandardId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Test Standard ID"
                                name="testStandardId"
                                value={values.testStandardId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Product ID"
                                name="productId"
                                value={values.productId}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Certificate Issue Date"
                                name="certIssueDate"
                                value={values.certIssueDate}
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

