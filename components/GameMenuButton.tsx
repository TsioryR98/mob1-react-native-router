import React from "react";
import { GestureResponderEvent, Pressable, Text } from "react-native";

import { styles } from "../styles/game_buttons";

interface GameButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string; //color
}

export default function GameButton({
  title,
  onPress,
  color = "#4CAF50",
}: GameButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        //combine dynamic and static inside an Array
        styles.button,
        { backgroundColor: color },
        pressed && styles.buttonPressed, // Effect on press
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
