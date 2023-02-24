import { FunctionComponent } from "react";
import { StyledIcon } from "./index.style";

export type IconType = "heart" | "star" | "x";

export interface IconProps {
  color?: string;
  size?: number;
  type: IconType;
}

const Icon: FunctionComponent<IconProps> = ({ size, type, ...rest }) => {
  switch (type) {
    case "heart":
      return (
        <StyledIcon
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={size}
          height={size}
        >
          <path
            d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"
            fill="currentColor"
          />
        </StyledIcon>
      );
    case "star":
      return (
        <StyledIcon
          {...rest}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={size}
          height={size}
        >
          <path
            d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z"
            fill="currentColor"
          />
        </StyledIcon>
      );
    case "x":
      return (
        <StyledIcon
          {...rest}
          width={size}
          height={size}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"
            fill="currentColor"
          />
        </StyledIcon>
      );
  }
};

export default Icon;
