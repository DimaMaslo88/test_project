import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type  CommonButtonType={
    title:string
}

export const CommonButton = ({title}:CommonButtonType) => {
    return (
        <Stack spacing={2} direction="row">

            <Button variant="contained">{title}</Button>

        </Stack>
    );
};

