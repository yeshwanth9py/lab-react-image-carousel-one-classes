import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            ind: 0
        }
        console.log(this)
        this.next = this.next.bind(this)
    }

    next(){
        console.log("here",this)
        this.setState(()=>{
            return {
                ind: (this.state.ind!=images.length-1)?(this.state.ind + 1):(0)
            }
        })
    }


    render() {
        let back_class = {
            background: images[this.state.ind].img
        }
        return ( 
            <div className="container" >     
                <ArrowBackIosIcon color="primary" fontSize="large" className="leftarr" />
                <h1 className="title">{images[this.state.ind].title}</h1>
                <img src={images[this.state.ind].img} />
                <ArrowForwardIosIcon color="primary" fontSize="large" className="rightarr" onClick={this.next} />
            </div>
        )
    }
}

export default Carousel;