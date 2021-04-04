
import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './LoginForm.css'
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';

const initialValues = {
    username: '', 
    password: '', 
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: 'calc(100% - 32px)',
            margin: theme.spacing(2)
            
        }
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 'bold'
    }
}))

export default function LoginForm(props: any) {


    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const classes = useStyle()

    const validate = () => {
        let temp = {
            username: '',
            password: '',
        }
        temp.username = values.username ? "" : "Username is required"
        temp.password = values.password ? "" : "Password is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(val => val === "")
    }
    const handleInputChange = (event : any) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleSubmit = (event: any) => {
        event.preventDefault()
        if(validate()) {
            alert('Form is valid')
        }
        
    }

  return (
    <div className="reg-form">
        <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={12}>
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