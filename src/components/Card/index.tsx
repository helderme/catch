import { Action } from "app-types/action";
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
  onAction: (action: Action) => void;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ cat: Cat, onAction, ...rest }) => {
  return (
    <StyledCard $catId={Cat.id} {...rest}>
      <Footer>
        <DataContainer>
          <Name>
            {Cat.name}, {Cat.age}
          </Name>
        </DataContainer>
        <ButtonsContainer>
          <Button
            icon={{ type: "x" }}
            variant={"ignore"}
            onClick={() => onAction(Action.Ignore)}
          />
          <Button
            icon={{ type: "star" }}
            variant={"superLike"}
            onClick={() => onAction(Action.SuperLike)}
          />
          <Button
            icon={{ type: "heart" }}
            variant={"like"}
            onClick={() => onAction(Action.Like)}
          />
        </ButtonsContainer>
      </Footer>
    </StyledCard>
  );
};

export default Card;
