import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PADDING } from "../../constants/padding";
import {
  getBottomSheetModal,
  setBlurActive,
  setBottomSheetModal,
} from "../../store/misc/reducer";

const ViewPostHeader = () => {
  const dispatch = useDispatch();
  const bottomSheet = useSelector(getBottomSheetModal);

  useEffect(() => {
    dispatch(setBlurActive(false));
  }, []);

  const showBookMarkModal = () => {
    if (bottomSheet.present && bottomSheet.type === "bookmark") {
      dispatch(setBottomSheetModal({ present: false, type: "" }));
      dispatch(setBlurActive(false));
    } else {
      dispatch(setBottomSheetModal({ present: true, type: "bookmark" }));
      dispatch(setBlurActive(true));
    }
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="bookmark-outline"
          size={28}
          color="black"
          style={{
            marginRight: PADDING[16],
          }}
          onPress={showBookMarkModal}
        />
        <Ionicons
          name="share-social-outline"
          size={28}
          color="black"
          style={{
            marginRight: PADDING[16],
          }}
        />
        <Ionicons
          name="ellipsis-vertical-outline"
          size={28}
          color="black"
          style={{
            marginRight: PADDING[16],
          }}
        />
      </View>
    </View>
  );
};

export default ViewPostHeader;
