import { Cat } from "app-types/cat";
import Button from "components/Button";
import { FunctionComponent, HTMLAttributes } from "react";
import {
  ButtonsContainer,
  DataContainer,
  Footer,
  Name,
  StyledCard,
} from "./index.style";

interface CardProps {
  cat: Cat;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ cat: Cat, ...rest }) => {
  return (
    <StyledCard $catId={Cat.id} {...rest}>
      <Footer>
        <DataContainer>
          <Name>{Cat.name}</Name>
        </DataContainer>
        <ButtonsContainer>
          <Button icon={{ type: "x" }} variant={"ignore"} />
          <Button icon={{ type: "star" }} variant={"superLike"} />
          <Button icon={{ type: "heart" }} variant={"like"} />
        </ButtonsContainer>
      </Footer>
    </StyledCard>
  );
};

export default Card;
