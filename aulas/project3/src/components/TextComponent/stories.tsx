import { TextComponent, TextComponentProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Tempore esse error ab adipisci quam voluptates!
    Hic impedit praesentium pariatur unde perspiciatis asperiores accusantium in,
     quis tempora laborum, error inventore libero?.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div style={{ maxWidth: '64rem', padding: '2rem' }}>
      <TextComponent {...args} />
    </div>
  );
};
