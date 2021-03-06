import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridTextElementProps = {
  title: string;
  description: string;
};
export type GridTextProps = {
  title: string;
  description: string;
  grid: GridTextElementProps[];
  background?: boolean;
  sectionId?: string;
};

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.title}>
              <Heading size="medium" colorDark={!background} as="h3">
                {e.title}
              </Heading>
              <TextComponent>{e.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
