import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { DummyDiv, type DummyDivProps } from './dummy-div';

const meta = {
  title: 'DummyDiv',
  render: args => DummyDiv(args),
  argTypes: {
    name: { type: 'string' },
  },
} satisfies Meta<DummyDivProps>;

export default meta;
type Story = StoryObj<DummyDivProps>;

export const Primary: Story = {};
