import React from 'react';
import { Zoom } from 'react-slideshow-image';
import {useFetch} from "../servcies/useHttpHookl";

const divStyles = {
    width: "400px",
    height: '300px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: "center"
}

const Slideshow = () => {
    const {data} = useFetch("https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f")
    return (
        <div className="slide-container">
            <Zoom scale={0.4}>
                {data?.flickr_images.map((img, index) =>  <img key={index} style={divStyles} src={img} alt={'image'}/>)}
            </Zoom>
        </div>
    )
}
export default Slideshow;