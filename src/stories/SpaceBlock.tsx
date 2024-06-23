import React from "react";
import "./spaceBlock.css";

export enum SpaceBlockStyle {
    common = "common",
    double = "double",
    hradient = "hradient",
}

interface SpaceBlockProps {
    style?: SpaceBlockStyle;
}

const SpaceBlock = ({ style = SpaceBlockStyle.common, ...props }: SpaceBlockProps) => <hr data-testid="space-block" className={`space-block-${style}`} {...props} />;

export default SpaceBlock;
