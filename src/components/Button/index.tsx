import Icon, { IconProps } from "components/Icon";
import { ButtonHTMLAttributes, FunctionComponent } from "react";
import { VariantType } from "ui/theme/theme";
import { StyledButton } from "./index.style";

interface ButtonProps {
  icon?: IconProps;
  variant?: VariantType;
}

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FunctionComponent<Props> = ({
  icon,
  variant = "like",
  ...rest
}) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {icon && <Icon size={40} {...icon} />}
    </StyledButton>
  );
};

export default Button;
