import { Svg, Path, SvgProps, G } from "react-native-svg";

export const CloseSVG = (props: SvgProps) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <G id="Menu / Close_MD">
        <Path
          id="Vector"
          d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};
