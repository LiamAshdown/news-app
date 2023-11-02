import { StyleSheet } from "react-native";

import { PADDING } from "../../constants/padding";
import Button from "../Button";

const Item = ({ children, selected = false }) => {
  return (
    <Button
      style={styles.button}
      variant={selected ? "primary" : "white"}
      size="small"
      rounded
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: PADDING[8],
  },
});

export default Item;
