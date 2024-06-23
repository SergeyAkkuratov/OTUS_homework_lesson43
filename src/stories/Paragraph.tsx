import React from 'react';
import './paragraph.css';

export enum ParagraphStyle {
    COMMON = "COMMON",
    CITATION = "CITATION",
    MAIN = "MAIN"
}

interface ParagraphProps {
    text: string;
    textStyle: ParagraphStyle;
}

export const Paragraph = ({
    text,
    textStyle = ParagraphStyle.COMMON,
    ...props
}: ParagraphProps) => {
    return (
        <p
            className={`paragraph-${textStyle.toLowerCase()}`}
            {...props}
        >
            {text}
        </p>
    );
};