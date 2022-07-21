import React from 'react';
type StacksType={
    title:string
}
export const Stacks = ({title}:StacksType) => {
    return (
        <div>
           <h2>
               {title}
           </h2>
        </div>
    );
};

