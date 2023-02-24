import { Action } from "app-types/action";
import { Cat } from "app-types/cat";
import { FunctionComponent } from "react";
import { CardsContainerCard, StyledCardsContainer } from "./index.style";

interface CardsContainerProps {
  cats: Cat[];
  onAction: (cat: Cat, action: Action) => void;
}

const CardsContainer: FunctionComponent<CardsContainerProps> = ({
  cats,
  onAction,
}) => {
  return (
    <StyledCardsContainer>
      {cats.map((cat, index) => (
        <CardsContainerCard
          key={cat.id}
          index={index}
          cat={cat}
          onAction={(action) => onAction(cat, action)}
        />
      ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
