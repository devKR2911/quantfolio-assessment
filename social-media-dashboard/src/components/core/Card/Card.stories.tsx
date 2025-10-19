import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "core/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["facebook", "twitter", "instagram", "youtube", undefined],
    },
    isClickable: {
      control: "radio",
      options: [true, false, undefined],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const FacebookCard: Story = {
  args: {
    type: "facebook",
    isClickable: true,
    children: "Card Content",
  },
};

export const TwitterCard: Story = {
  args: {
    type: "twitter",
    isClickable: true,
    children: "Card Content",
  },
};

export const InstagramCard: Story = {
  args: {
    type: "instagram",
    isClickable: true,
    children: "Card Content",
  },
};

export const YoutubeCard: Story = {
  args: {
    type: "youtube",
    isClickable: true,
    children: "Card Content",
  },
};
