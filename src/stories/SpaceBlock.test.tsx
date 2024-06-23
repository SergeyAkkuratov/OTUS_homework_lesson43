import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import SpaceBlock, { SpaceBlockStyle } from "./SpaceBlock";

describe("SpaceBlock", () => {
    it("should create SpaceBlock with default style", () => {
        render(<SpaceBlock />);

        const element = screen.getByTestId("space-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("HR");
        expect(element.classList).toContain("space-block-common");
    })
    it.each([
        [SpaceBlockStyle.common],
        [SpaceBlockStyle.double],
        [SpaceBlockStyle.hradient],
    ])
    ("should create SpaceBlock with style %p", (style) => {
        render(<SpaceBlock style={style} />);

        const element = screen.getByTestId("space-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("HR");
        expect(element.classList).toContain(`space-block-${style}`);
    })
})