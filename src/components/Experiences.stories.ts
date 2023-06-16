import type { Meta, StoryObj } from '@storybook/react';
import { Experiences } from './Experiences';

const meta = {
  title: 'Experiences',
  component: Experiences,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Experiences>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
