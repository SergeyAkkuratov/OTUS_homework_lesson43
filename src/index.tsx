import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import Header from "./stories/Header";
import SpaceBlock, { SpaceBlockStyle } from "./stories/SpaceBlock";
import Paragraph, { ParagraphStyle } from "./stories/Paragraph";
import CollapseBlock from "./stories/CollapseBlock";
import Image, { ImageSize } from "./stories/Image";
import testImage from "./stories/assets/test.jpg";

const root = createRoot(document.getElementById("app")!);
root.render(
    <>
        <Header level={1}>Hello, world</Header>
        <SpaceBlock style={SpaceBlockStyle.hradient} />
        <Paragraph textStyle={ParagraphStyle.citation}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
        </Paragraph>
        <SpaceBlock style={SpaceBlockStyle.common} />
        <CollapseBlock collapsed={true} title="Lorem ipsum">
            <Paragraph textStyle={ParagraphStyle.main}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum."
            </Paragraph>
        </CollapseBlock>
        <SpaceBlock style={SpaceBlockStyle.double} />
        <Image src={testImage} size={ImageSize.large} />
    </>
);
