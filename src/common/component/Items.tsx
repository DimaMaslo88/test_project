import React from 'react';
import HoverRatingLocal from "../rating/HoverRatingLocal";

type ItemsPropsType={
    title:string
}
const Items = ({title}:ItemsPropsType) => {
    return (
        <div>
            {title}
            <HoverRatingLocal/>
        </div>
    );
};

export default Items;