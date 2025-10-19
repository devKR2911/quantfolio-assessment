import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Core/Stack",
  component: Stack,
  argTypes: {
    gap: {
      control: "select",
      options: ["flush", "small", "medium", "between", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <div style={{ background: "#eee", padding: 20 }}>Item 1</div>
      <div style={{ background: "#ddd", padding: 20 }}>Item 2</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 3</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 4</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 5</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 6</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 7</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 8</div>
    </Stack>
  ),
};
