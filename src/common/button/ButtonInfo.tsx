import React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type  CommonButtonWhiteType={
    title:string
}

export const CommonButtonWhite = ({title}:CommonButtonWhiteType) => {
    return (
        <Stack spacing={2} direction="row">

            <Button variant="outlined">{title}</Button>

        </Stack>
    );
};

