import React from "react";
import { Link } from "react-router-dom";
import { Content, Wrapper } from "./ImagePath.style";

const ImagePath = ({ imageTitle }) => (
    <Wrapper>
        <Content>
            <Link to="/">
                <span> Home </span>
            </Link>
            <span> | </span>
            <span> {imageTitle} </span>
        </Content>
    </Wrapper>
);

export default ImagePath;
