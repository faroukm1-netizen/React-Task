import { Component, type ReactNode } from "react"
import cardImage from './../assets/images/card Image.jpg'
import type Course from "../types/Course";

type props = {
    courseProps:Course,
    onEnroll:(Course:Course)=>void
}

type state = {

}

export default class CourseCard extends Component<props,state>{

constructor(props:props){

super(props)
this.state={} 

}

render(): ReactNode {
    
let {title,instructor,duration,level,price} = this.props.courseProps

return  <div className="card card-bg">
  <img src={cardImage} alt="" />
  <div className="card-body">
   
    <div className="d-flex gap-3">
         <h5 className="card-title">{title}</h5>
    <h5 className="card-title">instractour : {instructor}</h5>
    </div>
   
<div className="d-flex gap-3">
    <p className="card-text">{duration}</p>
     <p className="card-text">{level}</p>
     <p className="card-text">{price}$</p>
</div>

    <button className="btn form-control bg-body" onClick={()=>this.props.onEnroll(this.props.courseProps
    )}>enroll now</button>
  </div>
</div>

    





}


} 