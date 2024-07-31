import React from "react";
import "./paragraph.css";

export enum ParagraphStyle {
    common = "common",
    citation = "citation",
    main = "main",
}

interface ParagraphProps {
    textStyle: ParagraphStyle;
}

const Paragraph = (props: React.PropsWithChildren<ParagraphProps>) => <p className={`paragraph-${props.textStyle}`}>{props.children}</p>;

export default Paragraph;
