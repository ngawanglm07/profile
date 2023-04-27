import React from "react";
import '../components/cards.css';
export default function Card(props){
    let badge 
    if(props.open === 1) {
        badge = ""
    } else if(props.location === "Online"){
        badge = "Private"
    }
    
    return(
    <div className="card">
       { badge && <div className="card-badge">{badge}</div>}
        <img src={props.img} className="card-image"></img>
        <div className="card-stats">
        <span > {props.star}★</span>
        <span className="gray"> ({props.number})</span>
        <span className="gray"> {props.spa} </span>
        </div>
        <a className="card-title" href={props.link}>{props.name} ↗</a>
        <p className="card-name"> <span className="bold">{props.paragraph}</span></p>
    </div>
 )
}