import { Svg, Path, SvgProps } from "react-native-svg";

export const PlusSVG = (props: SvgProps) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 12H20M12 4V20"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
