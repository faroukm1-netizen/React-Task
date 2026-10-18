import { Component, type ReactNode } from "react"
import CourseCard from "./CourseCard"
import type Course from "../types/Course";



type props = {
    onEnroll: (course:Course)=>void
}

type state = {
    courseData:Course[],
    filteredCourses:Course[]
}



export default class Courses extends Component<props,state>{


constructor(props: props) {
    super(props);

    const courses: Course[] = [
        {
            id:1,
            title: "Full Stack",
            instructor: "Mohamed Elsayed",
            duration: "4 Months",
            level: "Advanced",
            price: 500
        },
        {
            id:2,
            title: "Data Analsys",
            instructor: "Mohamed Ahmed",
            duration: "5 Weeks",
            level: "Beginner",
            price: 800
        },
        {
            id:3,
            title: "Front-End",
            instructor: "Ahmed Hassan",
            duration: "10 Months",
            level: "Advanced",
            price: 900
        }
    ];

    this.state = {
        courseData: courses,
        filteredCourses: courses
    };
}

search(value:string){

const result =  this.state.courseData.filter((course)=>

course.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())

)

this.setState ({
    filteredCourses:result
})

}



render(): ReactNode {
    return <section>



<span className="w-100 d-flex justify-content-center fs-3 pt-3 span">Explore our Courses</span>

<input type="search" className="btn form-control text-center fs-4 input" onKeyUp={(e)=>this.search(e.currentTarget.value)} placeholder="search..." />

<div className="container">

<div className="row">

{this.state.filteredCourses.length > 0 ? (
    this.state.filteredCourses.map((courseObject) => {
        return (
            <div key={courseObject.id} className="col-md-4 my-5 d-flex justify-content-center">
                <CourseCard
                    courseProps={courseObject}
                    onEnroll={this.props.onEnroll}
                />
            </div>
        )
    })
) : (
    <p className="text-center fs-4 mt-4">
        No Courses Found
    </p>
)}


</div>

    </div>


    </section>
}

}





