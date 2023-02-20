import styled from "styled-components";
import { getCatImage } from "utils/image";

const CARD_WIDTH = 400;

const StyledCard = styled.div<{ $catId: string }>`
  width: ${CARD_WIDTH}px;
  height: 600px;
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => props.theme.colors.white};
  background-image: url(${(props) => getCatImage(props.$catId, CARD_WIDTH)});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;

export { StyledCard };
