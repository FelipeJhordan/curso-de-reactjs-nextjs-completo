import { LogoLink, LogoLinkProps } from '.';

import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
  argTypes: {
    text: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
