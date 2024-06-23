import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Image, { ImageSize } from "./Image";
import testImage from "./assets/test.jpg";

describe("Image", () => {
    it("should create Image with default size", () => {
        render(<Image src={testImage} />);

        const element = screen.getByTestId("image-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("IMG");
        expect(element.classList).toContain("image-size-common");
    })

    it.each([
        [ImageSize.common],
        [ImageSize.large],
        [ImageSize.small],
    ])
    ("should create Image with size %p", (imageSize) => {
        render(<Image src={testImage} size={imageSize} />);

        const element = screen.getByTestId("image-block");
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe("IMG");
        expect(element.classList).toContain(`image-size-${imageSize}`);
    })
})