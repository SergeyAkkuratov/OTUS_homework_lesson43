import type { Meta, StoryObj } from "@storybook/react";
import Image, { ImageSize } from "./Image";
import imageFile from "./assets/example.jpg";

const meta = {
    title: "Example/Image",
    component: Image,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
    args: {
        src: imageFile,
        size: ImageSize.common,
    },
};

export const Large: Story = {
    args: {
        src: imageFile,
        size: ImageSize.large,
    },
};

export const Small: Story = {
    args: {
        src: imageFile,
        size: ImageSize.small,
    },
};
