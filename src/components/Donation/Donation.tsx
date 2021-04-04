import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, makeStyles, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import React, { useState } from 'react';
import './Donation.css'

const initialValues = {
    name: '',
    occupation: '',
    streetAddress: '',
    state: '',
    city: '',
    cellNumber: '',
    zipCode: '',
    denomination: '',
    schAmount: '',
    referredStudy: ''
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

export default function Donation(props: IDonationProps) {


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
            <div className="reg-header"><span className="reg-header-title">Donation Form</span></div>
            <div className="reg-form donation-form">
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>
                            <TextField
                                variant="outlined"
                                label="Name"
                                value={values.name}
                                name="name"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Occupation"
                                name="occupation"
                                value={values.occupation}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Street Address"
                                name="streetAddress"
                                value={values.streetAddress}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="City"
                                name="city"
                                value={values.city}
                                onChange={handleInputChange}
                            />
                            <FormControl variant="outlined">
                                <InputLabel>State</InputLabel>
                                <Select
                                    label="State"
                                    variant="outlined"
                                    name="state"
                                    value={values.state}
                                    onChange={handleInputChange}
                                >
                                    <MenuItem value="AL">Alabama</MenuItem>
                                    <MenuItem value="AK">Alaska</MenuItem>
                                    <MenuItem value="AZ">Arizona</MenuItem>
                                    <MenuItem value="AR">Arkansas</MenuItem>
                                    <MenuItem value="CA">California</MenuItem>
                                    <MenuItem value="CO">Colorado</MenuItem>
                                    <MenuItem value="CT">Connecticut</MenuItem>
                                    <MenuItem value="DE">Delaware</MenuItem>
                                    <MenuItem value="DC">District Of Columbia</MenuItem>
                                    <MenuItem value="FL">Florida</MenuItem>
                                    <MenuItem value="GA">Georgia</MenuItem>
                                    <MenuItem value="HI">Hawaii</MenuItem>
                                    <MenuItem value="ID">Idaho</MenuItem>
                                    <MenuItem value="IL">Illinois</MenuItem>
                                    <MenuItem value="IN">Indiana</MenuItem>
                                    <MenuItem value="IA">Iowa</MenuItem>
                                    <MenuItem value="KS">Kansas</MenuItem>
                                    <MenuItem value="KY">Kentucky</MenuItem>
                                    <MenuItem value="LA">Louisiana</MenuItem>
                                    <MenuItem value="ME">Maine</MenuItem>
                                    <MenuItem value="MD">Maryland</MenuItem>
                                    <MenuItem value="MA">Massachusetts</MenuItem>
                                    <MenuItem value="MI">Michigan</MenuItem>
                                    <MenuItem value="MN">Minnesota</MenuItem>
                                    <MenuItem value="MS">Mississippi</MenuItem>
                                    <MenuItem value="MO">Missouri</MenuItem>
                                    <MenuItem value="MT">Montana</MenuItem>
                                    <MenuItem value="NE">Nebraska</MenuItem>
                                    <MenuItem value="NV">Nevada</MenuItem>
                                    <MenuItem value="NH">New Hampshire</MenuItem>
                                    <MenuItem value="NJ">New Jersey</MenuItem>
                                    <MenuItem value="NM">New Mexico</MenuItem>
                                    <MenuItem value="NY">New York</MenuItem>
                                    <MenuItem value="NC">North Carolina</MenuItem>
                                    <MenuItem value="ND">North Dakota</MenuItem>
                                    <MenuItem value="OH">Ohio</MenuItem>
                                    <MenuItem value="OK">Oklahoma</MenuItem>
                                    <MenuItem value="OR">Oregon</MenuItem>
                                    <MenuItem value="PA">Pennsylvania</MenuItem>
                                    <MenuItem value="RI">Rhode Island</MenuItem>
                                    <MenuItem value="SC">South Carolina</MenuItem>
                                    <MenuItem value="SD">South Dakota</MenuItem>
                                    <MenuItem value="TN">Tennessee</MenuItem>
                                    <MenuItem value="TX">Texas</MenuItem>
                                    <MenuItem value="UT">Utah</MenuItem>
                                    <MenuItem value="VT">Vermont</MenuItem>
                                    <MenuItem value="VA">Virginia</MenuItem>
                                    <MenuItem value="WA">Washington</MenuItem>
                                    <MenuItem value="WV">West Virginia</MenuItem>
                                    <MenuItem value="WI">Wisconsin</MenuItem>
                                    <MenuItem value="WY">Wyoming</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                variant="outlined"
                                label="Zip Code"
                                name="zipCode"
                                value={values.zipCode}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Phone"
                                name="cellNumber"
                                value={values.cellNumber}
                                onChange={handleInputChange}
                            />
                            <InputLabel>Information on offered scholership</InputLabel>

                            <FormControl variant="outlined">
                                <TextField
                                    variant="outlined"
                                    label="Denomination"
                                    name="denomination"
                                    value={values.denomination}
                                    onChange={handleInputChange}
                                />
                                <FormControl>
                                    <FormLabel component="legend">Referred Studies (pick one)</FormLabel>
                                    <RadioGroup name="referredStudy" value={values.referredStudy} onChange={handleInputChange}>
                                        <FormControlLabel value="elementarySchool" control={<Radio />} label="Elementary School" />
                                        <FormControlLabel value="primarySchool" control={<Radio />} label="Primary School" />
                                        <FormControlLabel value="middleSchool" control={<Radio />} label="Middle School" />
                                        <FormControlLabel value="highSchool" control={<Radio />} label="High School" />
                                        <FormControlLabel value="undergraduate" control={<Radio />} label="Undergraduate" />
                                        <FormControlLabel value="graduate" control={<Radio />} label="Graduate" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    label="Scholarship Amount"
                                    name="schAmount"
                                    value={values.schAmount}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
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

