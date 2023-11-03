import Ionicons from "@expo/vector-icons/Ionicons";
import { MenuOption } from "react-native-popup-menu";

import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

export const Block = ({ text, iconName, value }) => (
  <MenuOption
    onSelect={() => alert(`You clicked ${value}`)}
    customStyles={{
      optionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: PADDING[8],
        paddingVertical: PADDING[8],
      },
    }}
  >
    <Ionicons name={iconName} size={18} />
    <Text size="medium" bold>
      {text}
    </Text>
  </MenuOption>
);
