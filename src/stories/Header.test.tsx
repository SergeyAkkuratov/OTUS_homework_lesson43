import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Header from "./Header";

describe("Header", () => {
    it.each([
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
    ])
    ("should create header level %p", (levelNumber) => {
        render(<Header level={levelNumber}>TEST</Header>);

        const header = screen.getByText("TEST");
        expect(header).toBeInTheDocument();
        expect(header.tagName).toBe(`H${levelNumber}`);
    })

    it("should return error on render", () => {
        expect(() => render(<Header level={10} />)).toThrow("Нет такого уровня для заголовка!");
    })
})