import React from 'react';
import checkmarkDark from './../../assets/checkmark-dark.svg';
import checkmarkLight from './../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext';
import SkillView from '../../common/SkillView';
import './SkillStyles.css'

function Skill() {
    const {theme}=useTheme();
    const arr1=[
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"HTML"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"CSS"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"JavaScript"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"TypeScript"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Node"}
    ]
    const arr2=[
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"React"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Angular"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Vue"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Tailwind CSS"},
    ]
    const arr3=[
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Redux"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Webpack"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Git"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"Jest"},
        {checkmarkDark:checkmarkDark,checkmarkLight:checkmarkLight,text:"BootStrap"}
    ]
  return (
    <section id='skills'>
        <h1>Skills</h1>
        <div className='skillView'>
        {arr1.map((el)=>{
            const img=theme==='light'?el.checkmarkLight:el.checkmarkDark;
            return (
                <SkillView img={img} text={el.text}></SkillView>
            )
        })}
        </div>
         <hr />
        <div className='skillView'>
        {arr2.map((el)=>{
            const img=theme==='light'?el.checkmarkLight:el.checkmarkDark;
            return (
                <SkillView img={img} text={el.text}></SkillView>
            )
        })}
        </div>
        <hr />
        <div className='skillView'>
        {arr3.map((el)=>{
            const img=theme==='light'?el.checkmarkLight:el.checkmarkDark;
            return (
                <SkillView img={img} text={el.text}></SkillView>
            )
        })}
        </div>
    </section>
  )
}

export default Skill