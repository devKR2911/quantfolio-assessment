import type { Meta, StoryObj } from "@storybook/react";
import DraggableComponent from "./DraggableComponent/DraggableComponent";

const meta: Meta<typeof DraggableComponent> = {
  title: "core/DraggableComponent",
  component: DraggableComponent,
  tags: ["autodocs"],
  argTypes: {
    identifier: {
      control: "text",
      description: "Unique identifier for the draggable container",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DraggableComponent>;

export const Default: Story = {
  render: (args) => (
    <DraggableComponent {...args}>
      <div style={{ padding: "8px", border: "1px solid #ccc", marginBottom: "4px" }}>Item 1</div>
      <div style={{ padding: "8px", border: "1px solid #ccc", marginBottom: "4px" }}>Item 2</div>
      <div style={{ padding: "8px", border: "1px solid #ccc", marginBottom: "4px" }}>Item 3</div>
      <div style={{ padding: "8px", border: "1px solid #ccc", marginBottom: "4px" }}>Item 4</div>
    </DraggableComponent>
  ),
  args: {
    identifier: "todays-overview",
  },
};
