import type { Meta, StoryObj } from '@storybook/react';

import { LatestSection } from './LatestSection';

const meta = {
  title: 'LatestSection',
  component: LatestSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LatestSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};