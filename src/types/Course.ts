export default interface Course {
    id:number
    title:string
    instructor:string
    duration:string
    level:"Beginner" | "Intermediate" | "Advanced"
    price:number
}