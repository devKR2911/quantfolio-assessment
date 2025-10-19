import type { Meta, StoryObj } from "@storybook/react-vite";
import Grid from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Core/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      <div style={{ background: "#eee", padding: 20 }}>Item 1</div>
      <div style={{ background: "#ddd", padding: 20 }}>Item 2</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 3</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 4</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 5</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 6</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 7</div>
      <div style={{ background: "#ccc", padding: 20 }}>Item 8</div>
    </Grid>
  ),
};
