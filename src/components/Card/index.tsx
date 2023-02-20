import { Cat } from "app-types/cat";
import { FunctionComponent, HTMLAttributes } from "react";
import { StyledCard } from "./index.style";

interface CardProps {
  cat: Cat;
}

type Props = CardProps & HTMLAttributes<HTMLDivElement>;

const Card: FunctionComponent<Props> = ({ cat: Cat, ...rest }) => {
  return <StyledCard $catId={Cat.id} {...rest}></StyledCard>;
};

export default Card;
