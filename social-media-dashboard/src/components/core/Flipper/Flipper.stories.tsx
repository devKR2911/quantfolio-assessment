import type { Meta, StoryObj } from "@storybook/react-vite";
import Flipper from "./Flipper";

const meta: Meta<typeof Flipper> = {
  title: "Core/Flipper",
  component: Flipper,
  tags: ["autodocs"],
  argTypes: {
    front: { control: "text" },
    back: { control: "text" },
    direction: { control: "select", options: ["horizontal", "vertical"] },
  },
};

export default meta;

type Story = StoryObj<typeof Flipper>;

export const HorizontalFlipper: Story = {
  args: {
    front: <div style={{ padding: 20, background: "#eee" }}>Front Side</div>,
    back: <div style={{ padding: 20, background: "#cfc" }}>Back Side</div>,
    direction: "horizontal",
  },
};

export const VerticalFlipper: Story = {
  args: {
    front: <div style={{ padding: 20, background: "#eee" }}>Front Side</div>,
    back: <div style={{ padding: 20, background: "#cfc" }}>Back Side</div>,
    direction: "vertical",
  },
};
