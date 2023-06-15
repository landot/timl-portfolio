import type { Meta, StoryObj } from '@storybook/react';
import { ProjectData } from '../data/projects';

import { Project } from './Project';

const meta = {
  title: 'Project',
  component: Project,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Project>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...ProjectData[0]
  },
};