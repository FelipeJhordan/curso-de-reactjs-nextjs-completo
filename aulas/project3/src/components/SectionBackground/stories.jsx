import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

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
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
