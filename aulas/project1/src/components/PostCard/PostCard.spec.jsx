const { render, screen } = require('@testing-library/react');
const { PostCard } = require('.');
const { postCardPropsMock } = require('./mock');

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard content={props} />);
    expect(screen.getByRole('img', { name: 'title 1' })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: /title 1/i })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard content={props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
