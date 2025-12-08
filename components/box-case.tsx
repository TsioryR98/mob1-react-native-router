import { FC } from "react";
import { Pressable } from "react-native";
import { styles } from "../styles/styles_global";

type BoxProps = {
  rowBox: number;
  columnBox: number;
  value: 0 | 1;
  handlePress: (rowBox: number, columnBox: number, value: 0 | 1) => void;
};

export const Box: FC<BoxProps> = ({
  rowBox,
  columnBox,
  value,
  handlePress,
}) => {
  return (
    <Pressable
      style={[
        styles.onPressBoxBase,
        { backgroundColor: value === 1 ? "grey" : "#1bb5fc" },
      ]}
      onPress={() => handlePress(rowBox, columnBox, value)}
    ></Pressable>
  );
};
