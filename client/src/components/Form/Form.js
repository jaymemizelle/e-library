import React from "react";
import { TextField, Button } from "@material-ui/core";

function Form( { buttonName, placeholder, onClick }) {


    return (
        <div>
            <TextField
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