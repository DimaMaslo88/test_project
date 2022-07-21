import React from 'react';
import {Languages} from "./languages/Languages";

export const Information = () => {
    return (
        <div>
            <h2>{'Current Stack'}</h2>
            <h3>{'Languages'}</h3>
            <Languages/>
        </div>
    );
};
