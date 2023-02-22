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
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M297.297 550.868c-13.774-15.437-48.17-45.529-76.435-66.874-83.744-63.242-95.142-72.395-129.144-103.703-62.684-57.721-89.305-115.71-89.213-194.34.044-38.384 2.66-53.172 13.409-75.797C34.152 71.768 61.015 43.245 95.36 25.799c24.326-12.355 36.323-17.845 76.945-18.07 42.493-.235 51.438 4.72 76.435 18.452 30.424 16.714 61.739 52.436 68.213 77.811l3.998 15.672 9.859-21.584c55.716-121.973 233.599-120.148 295.502 3.031 19.638 39.076 21.794 122.513 4.381 169.513-22.716 61.309-65.38 108.05-164.007 179.676-64.681 46.974-137.885 118.046-142.98 128.028-5.916 11.589-.283 1.817-26.409-27.46z"
            fill="currentColor"
          />
        </StyledIcon>
      );
    case "star":
      return (
        <StyledIcon
          {...rest}
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M0 449h1235l-999 726L618 0l382 1175L0 449z"
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
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"
            fill="currentColor"
          />
        </StyledIcon>
      );
  }
};

export default Icon;
