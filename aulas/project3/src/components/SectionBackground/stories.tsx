import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section container</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quia!
          Dolorem ut distinctio beatae accusamus facere? In debitis ipsa porro.
          Quasi explicabo quas voluptas animi, natus dolorem quos sit nostrum!
        </p>
      </div>
    ),
  },
  argTypes: {
    background: { type: 'boolean' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
