import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    const link = heading.firstChild;
    expect(link).toHaveAttribute('href', '#target');
  });
  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    const image = screen.getByRole('img', { name: 'Olá mundo' });
    expect(image).toHaveAttribute('src', 'image.jpg');
  });
  it('should match snapshot', () => {
    const {
      container: { firstChild },
    } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
