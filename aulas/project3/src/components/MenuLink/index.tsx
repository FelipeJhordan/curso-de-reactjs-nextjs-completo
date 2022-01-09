import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target} href={link}>
          {children}
        </Styled.Container>
      </Link>
    );
  }
  return (
    <Styled.Container target={target} href={link}>
      {children}
    </Styled.Container>
  );
};
