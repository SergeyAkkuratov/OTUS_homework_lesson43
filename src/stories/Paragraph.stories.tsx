import type { Meta, StoryObj } from "@storybook/react";
import Paragraph, { ParagraphStyle } from "./Paragraph";

const meta = {
    title: "Example/Paragraph",
    component: Paragraph,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
    args: {
        children: "This is MAIN text paragraph",
        textStyle: ParagraphStyle.main,
    },
};

export const Citation: Story = {
    args: {
        children: "This is Citation text paragraph",
        textStyle: ParagraphStyle.citation,
    },
};

export const Common: Story = {
    args: {
        children: "This is Common text paragraph",
        textStyle: ParagraphStyle.common,
    },
};
