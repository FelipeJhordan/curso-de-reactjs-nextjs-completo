const { render, screen } = require('@testing-library/react');
const { default: userEvent } = require('@testing-library/user-event');
const { Button } = require('.');

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    // Ira renderizar o componente ( Instanciar )
    render(<Button onClick={fn}>Load more</Button>);
    // Caso o numero de assertions seja diferente do experado, resulta em erro no teste
    expect.assertions(2);

    // Busca um elemento dado determinada função no dom, e procura pelo nome
    const button = screen.getByRole('button', { name: /load more/i });

    // Espera que um elemento com a role esteja no documento
    expect(button).toBeInTheDocument();
    // Espera que o elemento passado pelo parametro tenha a class "button"
    expect(button).toHaveAttribute('class', 'button');
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button onClick={fn}>Load more</Button>);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });

    // Dispara um "evento" de click no elemento passado
    // fireEvent.click(button);
    // é preferível utilizar userEvent pq simula melhor os eventos da dom
    userEvent.click(button);

    // espera que a funçao seja chamada 1 vez
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be not disabled when disabled is true', () => {
    const fn = jest.fn();
    render(
      <Button disabled={false} onClick={fn}>
        Load more
      </Button>,
    );
    const button = screen.getByRole('button', { name: /load more/i });
    // espera que o button não esteja desativado, seria mais intuitivo utilizar toBeEnabled()
    expect(button).not.toBeDisabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button disabled={false} onClick={fn}>
        Load more
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
