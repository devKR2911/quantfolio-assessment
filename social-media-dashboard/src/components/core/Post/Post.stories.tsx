import type { Meta, StoryObj } from "@storybook/react-vite";
import Post from "./Post";

const meta: Meta<typeof Post> = {
  title: "Core/Post",
  component: Post,
};

export default meta;

type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {
    title: "My First Post",
    description: "This is a description of my first post.",
    likes: 10,
    shares: 2,
    comments: 5,
  },
};
