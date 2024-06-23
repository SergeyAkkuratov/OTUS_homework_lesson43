import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Paragraph, { ParagraphStyle } from "./Paragraph";

describe("Paragraph", () => {
    it.each([
        [ParagraphStyle.common],
        [ParagraphStyle.citation],
        [ParagraphStyle.main],
    ])
    ("should create paragraph with style %p", (style) => {
        render(<Paragraph textStyle={style}>TEST</Paragraph>);

        const header = screen.getByText("TEST");
        expect(header).toBeInTheDocument();
        expect(header.tagName).toBe(`P`);
        expect(header.classList).toContain(`paragraph-${style}`);
    })
})