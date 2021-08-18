import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {

const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
             showCursor: true,
             backDelay: 1500,
             backSpeed: 60,
              strings: ['MERN STACK DEVELOPER', 'FREELANCER', 'BLOGGER' ] })
    },[])

    return (
        <div className = "intro"  id = "intro">
            <div className = "left">
                <div className = "imgContainer">
                    <img src = "assets/mainimg.png"/>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hello, I'm </h2>
                    <h1> Apaar Dahal</h1>
                    <h3> <span ref = {textRef}></span></h3>
                </div>
                <a href = "#portfolio">
                    <img src = "assets/downarrow.png"></img>
                </a>
            </div>
        </div>
    )
}
