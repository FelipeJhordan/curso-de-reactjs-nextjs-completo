import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

type GridImagePropsElement = {
  altText: string;
  srcImg: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  grid?: GridImagePropsElement[];
  background?: boolean;
  sectionId?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.srcImg}>
              <Styled.Image src={e.srcImg} alt={e.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
