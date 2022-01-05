import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
     Ducimus, quidem ipsa. Reiciendis, tenetur ab repellat est ad suscipit illum ducimus eaque,
      unde quam itaque ipsum rem reprehenderit sint assumenda incidunt.`,
    srcImg: 'assets/images/javascript.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
