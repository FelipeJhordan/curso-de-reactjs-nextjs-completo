import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Home } from '.';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title2',
          body: 'body 1',
          url: 'img0.jpg',
        },
        {
          userId: 1,
          id: 3,
          title: 'title3',
          body: 'body 3',
          url: 'img1.jpg',
        },
        {
          userId: 1,
          id: 2,
          title: 'title6',
          body: 'body 6',
          url: 'img2.jpg',
        },
        {
          userId: 1,
          id: 4,
          title: 'title title',
          body: 'body 133',
          url: 'img3.jpg',
        },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts and load more', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Não existe posts');

    expect.assertions(3);

    //  espera que o elemento seja removido
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', {
      name: /title/i,
    });
    expect(images).toHaveLength(4);

    const button = screen.getByRole('button', { name: /Load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const search = screen.getByPlaceholderText(/type your search/i);
    userEvent.type(search, 'title');

    expect(screen.getByRole('heading', { name: /Search Value title/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', {
        name: 'title title',
      }),
    ).not.toBeInTheDocument();
    userEvent.clear(search);
    userEvent.type(search, 'blabla');
    expect(screen.getByText('Não existe posts'));
  });
  it('should load more posts', async () => {
    const { debug } = render(<Home />);

    debug();
    const noMorePosts = screen.getByText('Não existe posts');

    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole('button', {
      name: /load more posts/i,
    });
    userEvent.click(button);
    expect(screen.getByRole('heading', { name: 'title3' }));

    expect(button).toBeDisabled();
  });
});
