import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

const Germany = () => {
  return (
    <>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="60"
        viewBox="0 0 80 60"
        fill="none"
      >
        <G clipPath="url(#clip0_3404_18201)">
          <Path d="M0 40H80V60H0V40Z" fill="#FFCE00" />
          <Path d="M0 20H80V40H0V20Z" fill="#DD0000" />
          <Path d="M0 0H80V20H0V0Z" fill="black" />
        </G>
        <Defs>
          <ClipPath id="clip0_3404_18201">
            <Rect width="80" height="60" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </>
  );
};

export default Germany;
