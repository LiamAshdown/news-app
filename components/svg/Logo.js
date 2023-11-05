import { G, Path, Svg } from "react-native-svg";

const Logo = ({ width = 88, height = 95 }) => {
  return (
    <>
      <Svg
        width={width}
        height={height}
        viewBox="0 0 88 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G id="Group">
          <Path
            id="Vector"
            d="M49.279 41.5019L16.3897 10.4355L0.666687 94.8995L49.279 41.5019Z"
            fill="#1A998E"
          />
          <Path
            id="Vector_2"
            d="M70.1671 85.4808L45.1014 46.1352L87.3333 0.333252L70.1671 85.4808Z"
            fill="#1A998E"
          />
          <Path
            id="Vector_3"
            d="M41.3036 85.4809L16.3898 10.4355H45.5407L70.1672 85.4809H41.3036Z"
            fill="#157A72"
          />
        </G>
      </Svg>
    </>
  );
};

export default Logo;
