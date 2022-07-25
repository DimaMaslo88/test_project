import React, {useState} from 'react';
import style from './Skill.module.scss'
import HoverRating from "../../../../../common/rating/HoverRating";
import {RatingInfo} from "../../../../../common/rating/ratingInfo/RatingInfo";
import ExpandMore from '@material-ui/icons/ExpandMore';
import {CodingChallenge} from "../../codingChallenge/CodingChallenge";
import ExpandLess from "@material-ui/icons/ExpandLess";

type SkillPropsType = {

    title: string
}
export const Skill = ({title}: SkillPropsType) => {
    const [open, setOpen] = useState<boolean>(false)
    const onChangeHandler = () => {
        setOpen(!open)
    }
    return (
        <div className={style.skill}>
            <div className={style.main}>
                <img src={'https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png'} className={style.logo}/>
                {title}
            </div>

            <div>
                <div className={style.rating}>
                    <HoverRating/>
                    {!open && <ExpandMore className={style.but} onClick={onChangeHandler}/>}
                    {open && <ExpandLess className={style.but} onClick={onChangeHandler}/>}
                </div>
                <div>
                    {open &&
                    <RatingInfo/>}
                    {open &&
                    <CodingChallenge/>
                    }

                </div>


            </div>
        </div>
    );
};

