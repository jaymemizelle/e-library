import React from "react";
import { TextField, Button } from "@material-ui/core";

function Form( { buttonName, placeholder, onClick, onChange }) {


    return (
        <div>
            <TextField
                onChange={onChange}
                style={{ margin: 8 }}
                placeholder={placeholder}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="filled"
            />
            <Button onClick={onClick} variant="contained" color="primary">
                {buttonName}
            </Button>
        </div>
    )



}

export default Form;