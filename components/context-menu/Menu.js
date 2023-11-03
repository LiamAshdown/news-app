import { StyleSheet, View } from "react-native";
import {
  Menu as ContextMenu,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

import { Block } from "./Block";
import Divider from "./Divider";
import { PADDING } from "../../constants/padding";

const Menu = ({ Trigger, options = [] }) => {
  const isLastIndex = (index) => index === options.length - 1;

  return (
    <ContextMenu>
      <MenuTrigger>{Trigger}</MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            borderRadius: 10,
            padding: PADDING[8],
          },
        }}
      >
        {options.map((option, index) => (
          <View key={index}>
            <Block {...option} />

            {!isLastIndex(index) && <Divider />}
          </View>
        ))}
      </MenuOptions>
    </ContextMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 100,
    marginHorizontal: 100,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#7F8487",
  },
});

export default Menu;
