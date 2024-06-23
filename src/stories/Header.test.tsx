import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Header from "./Header";

describe("Header", () => {
    it("should create header level 1", () => {
        render(<Header level={1}>TEST</Header>);

        expect(screen.getByText("TEST")).toBeInTheDocument();
    })
})