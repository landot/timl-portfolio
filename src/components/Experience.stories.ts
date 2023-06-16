import type { Meta, StoryObj } from '@storybook/react';
import { ExperienceData } from '../data/experiences';

import { Experience } from './Experience';

const meta = {
  title: 'Experience',
  component: Experience,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Experience>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: ExperienceData[0]
};