import React from "react";
import { IFram, Image } from "./Thumb.style";
import { Link } from "react-router-dom";

const Thumb = ({ url, date, clickable, mediaType }) => (
    <div>
        {
            clickable ?
                (
                    <Link to={`/image/${date}`}>
                        {
                            mediaType === "image" ?
                                (<Image src={url} alt="photo-thumb" />) :
                                (<IFram allow="autoplay" src={url} alt="video-thumb" ></IFram>)
                        }
                    </Link>
                )
                : mediaType === "image" ?
                    (<Image src={url} alt="photo-thumb" />) :
                    (<IFram allow="autoplay" src={url} alt="video-thumb" ></IFram>)

        }
    </div>
)

export default Thumb;