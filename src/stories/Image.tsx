import React from "react";
import "./image.css";

export enum ImageSize {
    large = "large",
    common = "common",
    small = "small",
}

interface ImageProps {
    src: string;
    size: ImageSize;
}

const Image = ({ src, size = ImageSize.common, ...props }: ImageProps) => <img src={src} className={`image-size-${size}`} {...props} />;

export default Image;
