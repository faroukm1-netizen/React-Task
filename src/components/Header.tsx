import { Component, type ReactNode } from "react";
import image from './../assets/images/Growth Level.jpg'

export default class Header extends Component {

render(): ReactNode {

    return <div>
        <span className="w-100 d-flex justify-content-center fs-3 pt-3 span">Growth Level — Your Journey to Success Starts Here</span>
    <div>
    <img src={image} alt="" width={'100%'} height={'650px'}/>
</div>
    </div>
}

}