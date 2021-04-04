import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './RegistrationForm.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const initialValues = {
    username: '',
    password: '', //(required, must be at most 8 characters long comprising at least a digit, a lowercase letter, and an uppercase letter) 
    firstName: '',
    middleName: '',
    lastName: '',
    gender: 'male',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    cellNumber: ''
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root, & .MuiFormGroup-root, & .MuiFormLabel-root, & .MuiInputBase-root, & .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(0.5)
        }
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
    }
}))

export default function RegistrationForm(props) {


    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const classes = useStyle()

    const validate = () => {
        let temp = {}
        temp.username = values.username ? "" : "Username is required"
        temp.password = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,8}$/).test(values.password) ? "" : "Must be at most 8 characters long comprising at least a digit, a lowercase letter, and an uppercase letter"
        temp.email = (/$\.+@.+..+/).test(values.email) ? "" : "Incorrect email format"
        temp.cellNumber = values.cellNumber.length > 9 ? "" : "Minimun 10 numbers required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(val => val === "")
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (validate()) {
            alert('Form is valid')
        }

    }

    return (
        <div className="reg-form">
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            label="User Id"
                            value={values.username}
                            name="username"
                            onChange={handleInputChange}
                            inputProps={{ maxLength: 8 }}
                            helperText={errors.username}
                        />
                        <TextField
                            variant="outlined"
                            label="Password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            type="password"
                            helperText={errors.password}
                            inputProps={{ maxLength: 8 }}
                        />
                        <TextField
                            variant="outlined"
                            label="First Name"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Middle Name"
                            name="middleName"
                            value={values.middleName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant="outlined"
                            label="Last Name"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleInputChange}
                        />
                        <FormControl>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row name="gender" value={values.gender} onChange={handleInputChange}>
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>



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
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            helperText={errors.email}
                        />

                        <TextField
                            variant="outlined"
                            label="Phone"
                            name="cellNumber"
                            value={values.cellNumber}
                            onChange={handleInputChange}
                            helperText={errors.cellNumber}
                        />
                    </Grid>
                    <div className="register-submit">
                        <button className="submit-btn">Submit</button>
                        <button className="reset-btn">Reset</button>
                    </div>
                </Grid>
            </form>
        </div>
    )
}