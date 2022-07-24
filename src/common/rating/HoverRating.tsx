import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import {Star} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {AppStateType, useAppDispatch} from "../../bll/state/store";
import {setRatingValueAC} from "../../bll/state/reducers/rating-reducer";


const labels: { [index: string]: string } = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
    const dispatch=useAppDispatch()
    const value=useSelector<AppStateType,number | null>(state=>state.rating.ratingValue)
    // const [value, setValue] = React.useState<number | null>(2);
    const [hover, setHover] = React.useState(-1);

    return (
        <div>
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                   dispatch(setRatingValueAC(newValue));
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>

        </div>
    );
}
