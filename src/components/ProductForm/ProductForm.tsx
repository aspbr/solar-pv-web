import { Grid, TextField, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import './ProductForm.css'

const initialValues = {
    name: '',
    modelNum: '',
    cellTechnology: '',
    cellManufacturer: '',
    numberOfCells: '',
    numberOfCellsInSeries: '',
    numberOfSeriesStrings: '',
    numberOfDiodes: '',
    productLength: '',
    productWidth: '',
    productWeight: '',
    superstrateType: '',
    superstrateManufacturer: '',
    substrateType: '',
    substrateManufacturer: '',
    frameType: '',
    frameAdhesive: '',
    encapsulantType: '',
    encapsulantManufacturer: '',
    junctionBoxType: '',
    junctionBoxManufacturer: ''
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

export default function ProductForm(props: IDonationProps) {


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
            <div className="reg-header"><span className="reg-header-title">Product Form</span></div>
            <div className="reg-form donation-form">
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid>
                        <TextField
                                variant="outlined"
                                label="Model Number"
                                value={values.modelNum}
                                name="modelNum"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Name"
                                value={values.name}
                                name="name"
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Cell Technology"
                                name="cellTechnology"
                                value={values.cellTechnology}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Cell Manufacturer"
                                name="cellManufacturer"
                                value={values.cellManufacturer}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Number Of Cells"
                                name="numberOfCells"
                                value={values.numberOfCells}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Number Of Cells In Series"
                                name="numberOfCellsInSeries"
                                value={values.numberOfCellsInSeries}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Number Of Series Strings"
                                name="numberOfSeriesStrings"
                                value={values.numberOfSeriesStrings}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Number Of Diodes"
                                name="numberOfDiodes"
                                value={values.numberOfDiodes}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Product Length"
                                name="productLength"
                                value={values.productLength}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Product Width"
                                name="productWidth"
                                value={values.productWidth}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Product Weight"
                                name="productWeight"
                                value={values.productWeight}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Superstrate Type"
                                name="superstrateType"
                                value={values.superstrateType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Superstrate Manufacturer"
                                name="superstrateManufacturer"
                                value={values.superstrateManufacturer}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Substrate Type"
                                name="substrateType"
                                value={values.substrateType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Substrate Manufacturer"
                                name="substrateManufacturer"
                                value={values.substrateManufacturer}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Frame Type"
                                name="frameType"
                                value={values.frameType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Frame Adhesive"
                                name="frameAdhesive"
                                value={values.frameAdhesive}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Encapsulant Type"
                                name="encapsulantType"
                                value={values.encapsulantType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Encapsulant Manufacturer"
                                name="encapsulantManufacturer"
                                value={values.encapsulantManufacturer}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Junction Box Type"
                                name="junctionBoxType"
                                value={values.junctionBoxType}
                                onChange={handleInputChange}
                            />
                            <TextField
                                variant="outlined"
                                label="Junction Box Manufacturer"
                                name="junctionBoxManufacturer"
                                value={values.junctionBoxManufacturer}
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
