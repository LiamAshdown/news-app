import { Image, StyleSheet, View } from "react-native";

import Button from "./Button";
import Text from "./typography/Text";
import { PADDING } from "../constants/padding";

const FollowAuthorsPublishersItem = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/publishers/cnn.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text size="large" bold>
          CNN News
        </Text>
      </View>
      <View>
        <Button rounded size="small">
          Follow
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: PADDING[12],
  },
  image: {
    height: 72,
    width: 72,
  },
});

export default FollowAuthorsPublishersItem;
