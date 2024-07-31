import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Paragraph, { ParagraphStyle } from "./Paragraph";

describe("Paragraph", () => {
    it.each([[ParagraphStyle.common], [ParagraphStyle.citation], [ParagraphStyle.main]])("should create paragraph with style %p", (style) => {
        render(<Paragraph textStyle={style}>TEST</Paragraph>);

        const element = screen.getByText("TEST");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe(`P`);
        expect(element.classList).toContain(`paragraph-${style}`);
    });
});
