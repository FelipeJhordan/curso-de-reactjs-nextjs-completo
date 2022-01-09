import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, fugiat
          impedit. Exercitationem, doloremque odio. Labore vel impedit sed,
          mollitia consectetur doloribus recusandae id dolores dolor eum totam
          fugit autem laudantium.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: {},
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
