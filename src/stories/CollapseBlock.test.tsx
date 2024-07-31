import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CollapseBlock from "./CollapseBlock";

describe("Collapse Block", () => {
    it("should create collapsed Collapse Block", async () => {
        render(
            <CollapseBlock title="Title" collapsed={true}>
                TEST
            </CollapseBlock>
        );

        const element = screen.getByTestId("collapse-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("DIV");
        expect(screen.queryByTestId("collapse-block-inner")).not.toBeInTheDocument();

        await userEvent.click(screen.getByTestId("collapse-block-title"));

        expect(screen.queryByTestId("collapse-block-inner")).toBeInTheDocument();
    });

    it("should create not collapsed Collapse Block", () => {
        render(
            <CollapseBlock title="Title" collapsed={false}>
                TEST
            </CollapseBlock>
        );

        const element = screen.getByTestId("collapse-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("DIV");
        expect(screen.queryByTestId("collapse-block-inner")).toBeInTheDocument();
    });
});
