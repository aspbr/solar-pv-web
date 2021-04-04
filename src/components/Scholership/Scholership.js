import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, makeStyles, Input } from '@material-ui/core';
import React, { useState } from 'react';
import './Scholership.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    cellNumber: '',
    dob: new Date(),
    placeOfBirth: '',
    numOfChildren: '',
    terminated: 'no',
    terminationExplaination: '',
    fatherFirstAndLastNames: '',
    fAge: ''
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
export default function Scholership(props) {


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

    function createData(year, school, city, country, classTaken, grade, rank, degree) {
        return { year, school, city, country, classTaken, grade, rank, degree };
    }

    function createHollowYearData(hYear, activities) {
        return { hYear, activities };
    }
    const hYears = [
        createHollowYearData(
            <TextField
                variant="filled"
                label="Hollow Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Activities"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />
        ),
        createHollowYearData(
            <TextField
                variant="filled"
                label="Hollow Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Activities"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />
        )
    ]
    const rows = [
        createData(
            <TextField
                variant="filled"
                label="Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="School"
                name="school1"
                value={values.school1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="City"
                name="city1"
                value={values.city1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Country"
                name="country1"
                value={values.country1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Class"
                name="class1"
                value={values.class1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Grade"
                name="grade1"
                value={values.grade1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Rank"
                name="rank1"
                value={values.rank1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Degree"
                name="degree1"
                value={values.degree1}
                onChange={handleInputChange}
            />
        ),

        createData(
            <TextField
                variant="filled"
                label="Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="School"
                name="school1"
                value={values.school1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="City"
                name="city1"
                value={values.city1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Country"
                name="country1"
                value={values.country1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Class"
                name="class1"
                value={values.class1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Grade"
                name="grade1"
                value={values.grade1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Rank"
                name="rank1"
                value={values.rank1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Degree"
                name="degree1"
                value={values.degree1}
                onChange={handleInputChange}
            />
        ),

        createData(
            <TextField
                variant="filled"
                label="Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="School"
                name="school1"
                value={values.school1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="City"
                name="city1"
                value={values.city1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Country"
                name="country1"
                value={values.country1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Class"
                name="class1"
                value={values.class1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Grade"
                name="grade1"
                value={values.grade1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Rank"
                name="rank1"
                value={values.rank1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Degree"
                name="degree1"
                value={values.degree1}
                onChange={handleInputChange}
            />
        ),

        createData(
            <TextField
                variant="filled"
                label="Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="School"
                name="school1"
                value={values.school1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="City"
                name="city1"
                value={values.city1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Country"
                name="country1"
                value={values.country1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Class"
                name="class1"
                value={values.class1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Grade"
                name="grade1"
                value={values.grade1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Rank"
                name="rank1"
                value={values.rank1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Degree"
                name="degree1"
                value={values.degree1}
                onChange={handleInputChange}
            />
        ),


        createData(
            <TextField
                variant="filled"
                label="Year"
                name="year1"
                value={values.year1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="School"
                name="school1"
                value={values.school1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="City"
                name="city1"
                value={values.city1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Country"
                name="country1"
                value={values.country1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Class"
                name="class1"
                value={values.class1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Grade"
                name="grade1"
                value={values.grade1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Rank"
                name="rank1"
                value={values.rank1}
                onChange={handleInputChange}
            />,
            <TextField
                variant="filled"
                label="Degree"
                name="degree1"
                value={values.degree1}
                onChange={handleInputChange}
            />
        ),
    ];

    return (
        <div className="sch-div">
            <div className="reg-header"><span className="reg-header-title">Scholership Form</span></div>
            <div className="reg-form sch-form">

                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>
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
                            <TextField
                                variant="outlined"
                                id="date"
                                label="Birthday"
                                type="date"
                                name="dob"
                                value={values.dob}
                                className={classes.textField}
                                onChange={handleInputChange}
                                helperText={errors.dob}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                variant="outlined"
                                label="Place of birth (City/Country)"
                                name="placeOfBirth"
                                value={values.placeOfBirth}
                                onChange={handleInputChange}
                                helperText={errors.placeOfBirth}
                            />

                            <FormControl>
                                <FormLabel component="legend">Marital Status</FormLabel>
                                <RadioGroup row name="gender" value={values.mStatus} onChange={handleInputChange}>
                                    <FormControlLabel value="neverMarried" control={<Radio />} label="Never Married" />
                                    <FormControlLabel value="married" control={<Radio />} label="Married" />
                                    <FormControlLabel value="separated" control={<Radio />} label="Separated" />
                                    <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                                    <FormControlLabel value="widow" control={<Radio />} label="Widow" />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                label="Number of children"
                                name="numOfChildren"
                                value={values.numOfChildren}
                                onChange={handleInputChange}
                                helperText={errors.numOfChildren}
                            />

                            <FormControl>
                                <FormLabel component="legend">Elementry and Primary Schools</FormLabel>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Year</TableCell>
                                                <TableCell>School</TableCell>
                                                <TableCell>City</TableCell>
                                                <TableCell>Country</TableCell>
                                                <TableCell>Class</TableCell>
                                                <TableCell>Grade</TableCell>
                                                <TableCell>Rank</TableCell>
                                                <TableCell>Degree</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.year}>
                                                    <TableCell component="th" scope="row">
                                                        {row.year}
                                                    </TableCell>
                                                    <TableCell>{row.school}</TableCell>
                                                    <TableCell>{row.city}</TableCell>
                                                    <TableCell>{row.country}</TableCell>
                                                    <TableCell>{row.classTaken}</TableCell>
                                                    <TableCell>{row.grade}</TableCell>
                                                    <TableCell>{row.rank}</TableCell>
                                                    <TableCell>{row.degree}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </FormControl>



                            <FormControl>
                                <FormLabel component="legend">Elementry and Primary Schools</FormLabel>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Year</TableCell>
                                                <TableCell>School</TableCell>
                                                <TableCell>City</TableCell>
                                                <TableCell>Country</TableCell>
                                                <TableCell>Class</TableCell>
                                                <TableCell>Grade</TableCell>
                                                <TableCell>Rank</TableCell>
                                                <TableCell>Degree</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.year}>
                                                    <TableCell component="th" scope="row">
                                                        {row.year}
                                                    </TableCell>
                                                    <TableCell>{row.school}</TableCell>
                                                    <TableCell>{row.city}</TableCell>
                                                    <TableCell>{row.country}</TableCell>
                                                    <TableCell>{row.classTaken}</TableCell>
                                                    <TableCell>{row.grade}</TableCell>
                                                    <TableCell>{row.rank}</TableCell>
                                                    <TableCell>{row.degree}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </FormControl>


                            <FormControl>
                                <FormLabel component="legend">University</FormLabel>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Year</TableCell>
                                                <TableCell>School</TableCell>
                                                <TableCell>City</TableCell>
                                                <TableCell>Country</TableCell>
                                                <TableCell>Class</TableCell>
                                                <TableCell>Grade</TableCell>
                                                <TableCell>Rank</TableCell>
                                                <TableCell>Degree</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.year}>
                                                    <TableCell component="th" scope="row">
                                                        {row.year}
                                                    </TableCell>
                                                    <TableCell>{row.school}</TableCell>
                                                    <TableCell>{row.city}</TableCell>
                                                    <TableCell>{row.country}</TableCell>
                                                    <TableCell>{row.classTaken}</TableCell>
                                                    <TableCell>{row.grade}</TableCell>
                                                    <TableCell>{row.rank}</TableCell>
                                                    <TableCell>{row.degree}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </FormControl>

                            <FormControl>
                                <FormLabel component="legend">List your whereabouts during the hollow year</FormLabel>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Hollow Year</TableCell>
                                                <TableCell>Activities</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {hYears.map((row) => (
                                                <TableRow key={row.hYear}>
                                                    <TableCell component="th" scope="row">
                                                        {row.hYear}
                                                    </TableCell>
                                                    <TableCell>{row.activities}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </FormControl>

                            <FormControl>
                                <FormLabel component="legend">Have you ever been terminated from a school?</FormLabel>
                                <RadioGroup row name="terminated" value={values.terminated} onChange={handleInputChange}>
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                variant="filled"
                                label="If Yes, Explain"
                                name="terminationExplaination"
                                value={values.terminationExplaination}
                                onChange={handleInputChange}
                            />



                            <FormControl>
                                <FormLabel component="legend">Parents` Marital Status</FormLabel>
                                <RadioGroup row name="gender" value={values.mStatus} onChange={handleInputChange}>
                                    <FormControlLabel value="neverMarried" control={<Radio />} label="Never Married" />
                                    <FormControlLabel value="married" control={<Radio />} label="Married" />
                                    <FormControlLabel value="separated" control={<Radio />} label="Separated" />
                                    <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                                    <FormControlLabel value="widow" control={<Radio />} label="Widow" />
                                </RadioGroup>
                            </FormControl>

                            <TextField
                                variant="outlined"
                                label="Father First & Last Names"
                                name="fatherFirstAndLastNames"
                                value={values.fatherFirstAndLastNames}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Fathers` Age"
                                name="fAge"
                                value={values.fAge}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Fathers` Address"
                                name="fAddress"
                                value={values.fAddress}
                                onChange={handleInputChange}
                            />


                            <TextField
                                variant="outlined"
                                label="Fathers` Phone"
                                name="fPhone"
                                value={values.fPhone}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Fathers` Occupation (if retired, provide the last occupation before retirement and how many years into retirement)"
                                name="fOccupation"
                                value={values.fOccupation}
                                onChange={handleInputChange}
                            />


                            <TextField
                                variant="outlined"
                                label="Fathers` Employer Name"
                                name="fEmpName"
                                value={values.fEmpName}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Fathers` Employer Address"
                                name="fEmpAddress"
                                value={values.fEmpAddress}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Mothers` First & Last Names"
                                name="motherFirstAndLastNames"
                                value={values.motherFirstAndLastNames}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Mothers` Age"
                                name="mAge"
                                value={values.mAge}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Mothers` Address"
                                name="mAddress"
                                value={values.mAddress}
                                onChange={handleInputChange}
                            />


                            <TextField
                                variant="outlined"
                                label="Mothers` Phone"
                                name="mPhone"
                                value={values.mPhone}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Mothers` Occupation (if retired, provide the last occupation before retirement and how many years into retirement)"
                                name="mOccupation"
                                value={values.mOccupation}
                                onChange={handleInputChange}
                            />


                            <TextField
                                variant="outlined"
                                label="Mothers` Employer Name"
                                name="mEmpName"
                                value={values.mEmpName}
                                onChange={handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                label="Mothers` Employer Address"
                                name="mEmpAddress"
                                value={values.mEmpAddress}
                                onChange={handleInputChange}
                            />


                            <FormControl>
                                <FormLabel component="legend">Annual Budget Esimation</FormLabel>

                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Expenses</TableCell>
                                                <TableCell>Amount</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Tution
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="tution"
                                                        value={values.tution}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Books
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="books"
                                                        value={values.books}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    School Furniture
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="schoolFur"
                                                        value={values.schoolFur}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Transportation
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="transportation"
                                                        value={values.transportation}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Clothing
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="clothing"
                                                        value={values.clothing}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Recreation
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="recreation"
                                                        value={values.recreation}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Others
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="others"
                                                        value={values.others}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Total Expenses
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="totalExpenses"
                                                        value={values.totalExpenses}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>


                                        </TableBody>
                                    </Table>


                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Revenue Sources</TableCell>
                                                <TableCell>Amount</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                Parents support
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="pSupport"
                                                        value={values.pSupport}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Loan
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="loan"
                                                        value={values.loan}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    School Break Activities
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="sBreakActs"
                                                        value={values.sBreakActs}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Friends Support
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="friendSupport"
                                                        value={values.friendSupport}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Other Sources
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="otherSources"
                                                        value={values.otherSources}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>

                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    Total Revenues
                                                </TableCell>
                                                <TableCell>
                                                    <TextField
                                                        variant="outlined"
                                                        name="totalRevenues"
                                                        value={values.totalRevenues}
                                                        onChange={handleInputChange}
                                                    />
                                                </TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>

                                </TableContainer>
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

