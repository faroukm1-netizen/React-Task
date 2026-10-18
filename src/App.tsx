import { Component, type ReactNode } from "react";
import Header from "./components/Header";
import Courses from "./components/Courses";
import EnrollCourses from "./components/EnrolledCourses";
import type Course from "./types/Course";


type state = {
enrolledCourses:Course[]
}


export default class App extends Component<{},state> {

constructor(props:{}){
super(props)

this.state = ({
    enrolledCourses:[]
})

}

handleEnroll(course: Course): void {
    this.setState({
        enrolledCourses: [
            ...this.state.enrolledCourses,
            course
        ]
    })
}

handleUnenroll(id: number): void {
    this.setState({
        enrolledCourses: this.state.enrolledCourses.filter(
            (course) => course.id !== id
        )
    })
}

render(): ReactNode {
    return <section>

<Header />
<Courses   onEnroll={(course) => this.handleEnroll(course)} />
<EnrollCourses enrolledCourses={this.state.enrolledCourses}
    onUnenroll={(id) => this.handleUnenroll(id)} />


    </section> 
}



}