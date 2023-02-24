import { StyledIcon } from "components/Icon/index.style";
import styled from "styled-components";
import { VariantType } from "ui/theme/theme";

interface StyledButtonProps {
  variant: VariantType;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.variants[props.variant].main};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  ${StyledIcon} {
    color: ${(props) => props.theme.variants[props.variant].main};
    transition: all 0.4s ease-in-out;
  }

  :hover {
    background: ${(props) => props.theme.variants[props.variant].main};
    ${StyledIcon} {
      color: ${(props) => props.theme.variants[props.variant].contrast};
    }
  }
`;

export { StyledButton };
