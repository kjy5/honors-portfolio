import type { Meta, StoryObj } from "@storybook/react";
import artifactMetas from "../utils/artifact-metas.ts";
import LinkCard from "./link-card.tsx";

const meta: Meta<typeof LinkCard> = {
  component: LinkCard,
};
export default meta;

type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  args: {
    linkMeta: artifactMetas[7].links[0],
  },
};

export const NoImage: Story = {
  args: {
    linkMeta: artifactMetas[9].links[0],
  },
};
