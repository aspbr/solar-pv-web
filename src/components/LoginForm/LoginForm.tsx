import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './LoginForm.css'
import { useHistory } from 'react-router-dom';

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

    let history = useHistory();

    const gotoHomePage = () => {
        history.push('/')
      }

    const goToDjangoAdminPage = () => {
        window.location.href = 'http://localhost:8000/admin/'
    }

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
            if(values.username === 'a')
                gotoHomePage()
            else
                goToDjangoAdminPage()
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