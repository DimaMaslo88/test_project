import React from 'react';
import style from './Title.module.scss'
type TitlePropsType={
    title:string
}
const Title = ({title}:TitlePropsType) => {
    return (
        <div className={style.title}>
            {title}
        </div>
    );
};

export default Title;