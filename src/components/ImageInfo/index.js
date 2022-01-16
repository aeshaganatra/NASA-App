import React from "react";
import { Wrapper, Content, Text } from "./ImageInfo.style";
import Thumb from "../Thumb"

const ImageInfo = ({ image }) => (
    <Wrapper backdrop={image.url}>
        <Content>
            <Thumb
                url={image.url}
                clickable={false}
                alt="Image Poster"
                mediaType={image.media_type}
            />
            <Text>
                <h1> {image.title} </h1>
                <p> {image.explanation} </p>
            </Text>
        </Content>
    </Wrapper>
)

export default ImageInfo;
