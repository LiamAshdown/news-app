import { Image, View } from "react-native";

const ViewPostImageTitle = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/view-post.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Header size="small">
          Unmasking the Truth: Investigative Report Exposes Widespread Political
          Corruption
        </Header>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: "100%",
    borderRadius: BORDER_RADIUS[8],
  },
  imageContainer: {
    justifyContent: "center",
    marginBottom: PADDING[12],
  },
  publisherContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
    marginTop: PADDING[6],
  },
  circleDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "black",
  },
  publisherIcon: {
    width: 20,
    height: 20,
  },
  followingText: {
    color: THEME_COLORS.primary,
  },
  textGray: {
    color: COLOR_GREY_SCALE[500],
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
  statsIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[4],
  },
  statsIconTextContainer: {
    marginLeft: PADDING[14],
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[12],
  },
});

export default ViewPostImageTitle;
