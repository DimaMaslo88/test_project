import React from 'react';
import {Languages} from "./languages/Languages";
import {Technologies} from "./technologies/Technologies";

export const Information = () => {
    return (
        <div>
            <h2>{'Current Stack'}</h2>
            <Languages name={'Languages'}/>
            <Technologies name={'Technologies'}/>
        </div>
    );
};
