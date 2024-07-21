import { Meta, StoryFn } from "@storybook/react";

import { IconEdit } from "@/assets/icon/edit";

export default {
  component: IconEdit,
  args: {
    size: "default",
    alt: "edit",
  },
} as Meta<typeof IconEdit>;

export const Base: StoryFn<typeof IconEdit> = (args) => <IconEdit {...args} />;
