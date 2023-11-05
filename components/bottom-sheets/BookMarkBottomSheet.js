import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { View, StyleSheet, ViewBase } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";
import {
  getBottomSheetModal,
  setBlurActive,
  setBottomSheetModal,
} from "../../store/misc/reducer";
import Button from "../Button";
import Checkbox from "../form/Checkbox";
import Header from "../typography/Header";
import Text from "../typography/Text";

const BookMarkBottomSheet = () => {
  const bottomSheetModalRef = useRef(null);
  const dispatch = useDispatch();

  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const bottomSheet = useSelector(getBottomSheetModal);

  console.log("bottomSheet", bottomSheet);

  if (bottomSheet.present && bottomSheet.type === "bookmark") {
    bottomSheetModalRef.current?.present();
  } else {
    bottomSheetModalRef.current?.dismiss();
  }

  const handleSheetChanges = (index) => {
    console.log("handleSheetChanges" + new Date(), index);
    if (index === -1) {
      dispatch(setBlurActive(false));
      dispatch(setBottomSheetModal({ present: false, type: "" }));
    } else {
      dispatch(setBlurActive(true));
    }
  };

  // renders
  return (
    <View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={bottomSheet.present ? 1 : -1}
        snapPoints={snapPoints}
        style={styles.container}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Header size="small" style={styles.headerText}>
              Save to bookmark
            </Header>
            <View style={styles.iconContainer}>
              <Ionicons
                name="add-outline"
                size={32}
                color={THEME_COLORS.primary}
              />
              <Text size="large" style={styles.iconText} bold>
                New
              </Text>
            </View>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
            <Checkbox
              text="Add to reading list"
              textStyle={styles.checkboxTextStyle}
            />
          </View>
        </View>
        <View style={styles.actionContainer}>
          <Button block variant="white" rounded>
            Cancel
          </Button>
          <Button block rounded>
            Done
          </Button>
        </View>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: CONTAINER_PADDING,
  },
  checkboxContainer: {
    flexDirection: "column",
    paddingVertical: PADDING[16],
    gap: PADDING[16],
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingVertical: PADDING[16],
    gap: PADDING[16],
    borderTopColor: COLOR_GREY_SCALE[300],
    borderTopWidth: 1,
    paddingBottom: PADDING[16],
  },
  headerText: {
    fontFamily: FONT_FAMILY_URBANIST.bold,
  },
  checkboxTextStyle: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
    color: "black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    borderBottomColor: COLOR_GREY_SCALE[300],
    borderBottomWidth: 1,
    paddingBottom: PADDING[16],
  },
  iconText: {
    color: THEME_COLORS.primary,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    borderRadius: 200,
  },
});

export default BookMarkBottomSheet;
