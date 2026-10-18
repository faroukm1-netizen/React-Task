import { Component, type ReactNode } from "react";
import type Course from "../types/Course";
import UnEnrollCourseCard from "./UnEnrolledCourse";



type props = {
enrolledCourses:Course[],
 onUnenroll:(id:number)=>void 
}

type state = {}

export default class EnrollCourses extends Component<props,state>{

constructor(props:props){

super(props)

this.state = {}


}

render(): ReactNode {

     return <section className="my-5">
     
     
     
     <span className="w-100 d-flex justify-content-center fs-3 pt-3 span">Our Enrolled Courses</span>
     

     <div className="container">
     
     <div className="row">
     
     {this.props.enrolledCourses.map((courseObject,index)=>{
     return <div key={index} className="col-md-4 my-5">
     
    <UnEnrollCourseCard courseProps={courseObject} onUnenroll={this.props.onUnenroll} />
     
     </div> 
     
     })}
     
     
     </div>
     
         </div>
     
     
         </section>




}




}
