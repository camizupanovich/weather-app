import React from "react";
import s from "./styles/About.module.css";
import logo from './logo-mundo.png';
import img from './linkedin.png';
import mail from './gmail.png';
import github from './git.png';

export default function About(){
    <About/>
    return ( 
    <div className={s.bodyAbout}>
        <p className={s.titleApp}>WEATHER APP</p>
           <div className={s.description}>
             <p className={s.descriptionSPA}> Una app que te conecta con los climas de todo el MUNDO.</p>
          <div>
            <img className={s.icon} src={logo} alt="logo" width='400px'/>
           </div>
             <p >The app is designed as a SPA (Single Page Application), where users interact with the page in a more dynamic way.</p>
            <p>In this project i used the library React Js,  also an extern api to consume the data and i imported the fonts from Google.</p>
            </div>
            <p className={s.createdBy}>Created by: Camila Zupanovich</p>
            <div className={s.social}>
            <a href="https://www.linkedin.com/in/camila-antonela-florencia-zupanovich/" target="_blank" rel="noreferrer"><img src={img} width="60px" alt=""/></a>
            <a href="mailto:cami.zupanovich@hotmail.com" target="_blank" rel="noreferrer"><img src={mail} height="60px" alt=""/></a>
            <a href="https://github.com/camizupanovich" target="_blank" rel="noreferrer"><img src={github} height="60px"alt=""/></a>
            </div>
     </div>
    )
}