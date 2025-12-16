import { FC } from "react";
import { Image, Pressable, Text, TextStyle } from "react-native";
import bombImage from "../assets/images/bomb.png";
import { styles } from "../styles/styles_global";

type BoxProps = {
  value: { isBomb: boolean; isOpen: boolean; value: number };
  rowBox: number;
  columnBox: number;
  handlePress: (rowBox: number, columnBox: number) => void;
  isGameOver: boolean;
};

const color: Record<number, string> = {
  0: "#00A2FF",
  1: "#00A2FF",
  2: "#00B300",
  3: "#FFD500",
  4: "#FF8C00",
  5: "#FF3B3B",
  6: "#B80000",
};

export const Box: FC<BoxProps> = (props) => {
  const { value, rowBox, columnBox, handlePress, isGameOver } = props;

  const textStyle: TextStyle = {
    color: color[value.isBomb ? 1 : value.value],
    fontWeight: "bold",
  };

  return (
    <Pressable
      style={[
        styles.onPressBoxBase,
        {
          backgroundColor: !value.isOpen && !isGameOver ? "#1bb5fc" : "#858889",
        },
      ]} //or with ... instead of array of styles
      onPress={() => handlePress(rowBox, columnBox)}
    >
      {!value.isBomb && (value.isOpen || isGameOver) && value.value !== 0 && (
        <Text style={textStyle}>{value.value}</Text>
      )}
      {isGameOver && value.isBomb && (
        <Image source={bombImage} style={styles.onPressBoxBase} />
      )}
      {/**{ condition && <Text>...</Text> } for react if true return text :null ,
       * all conditions inside { each condition is checked separately }
      
       */}
    </Pressable>
  );
};
