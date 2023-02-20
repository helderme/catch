import Card from "components/Card";
import { FunctionComponent } from "react";
import { getRandomCat } from "utils/random";
import { StyledUI } from "./index.style";

const UI: FunctionComponent = () => {
  const cat = getRandomCat();

  return (
    <StyledUI>
      <Card cat={cat} />
    </StyledUI>
  );
};

export default UI;
