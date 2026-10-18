import { Component, type ReactNode } from "react"
import cardImage from './../assets/images/card Image.jpg'

interface Course {
    id:number
    title:string
    instructor:string
    duration:string
    level:"Beginner" | "Intermediate" | "Advanced"
    price:number
}


type props = {
    courseProps:Course,
    onUnenroll:(id:number)=>void
}

type state = {

}

export default class UnEnrollCourseCard extends Component<props,state>{

constructor(props:props){

super(props)
this.state={} 

}

render(): ReactNode {
    
let { id, title,instructor,duration,level,price} = this.props.courseProps

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

    <button className="btn form-control bg-body" onClick={()=>this.props.onUnenroll(id)}>Un Enroll</button>
  </div>
</div>

    





}


} 