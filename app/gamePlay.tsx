import { Box } from "@/components/BoxCase";
import boardCreationWithMine from "@/utilities/board-creation";
import revealEmptyZone from "@/utilities/revealEmptyZone";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles_global";
const boardSize = 20;
const bombCount = 40;
export default function gamePlay() {
  const tab = boardCreationWithMine(boardSize, bombCount);
  const [boxState, setBoxState] = useState(tab);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePress = (rowBox: number, columnBox: number) => {
    const newTab = boxState.map((row) => [...row]);
    const currentValue = newTab[rowBox][columnBox];
    if (currentValue.isBomb) {
      setIsGameOver(true);
      return;
    }

    if (!currentValue.isOpen && currentValue.value === 0) {
      const newBoard = revealEmptyZone(newTab, rowBox, columnBox);
      setBoxState(newBoard);
      return;
    }

    if (!currentValue.isOpen) {
      newTab[rowBox][columnBox] = { ...currentValue, isOpen: true };
      setBoxState(newTab);
    }
  };

  const retry = () => {
    setBoxState(boardCreationWithMine(boardSize, bombCount));
    setIsGameOver(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Demineur Game</Text>
      </View>
      <View style={styles.boxContainer}>
        {boxState.map((row, rowBox) => (
          <View key={rowBox} style={styles.horizontalLine}>
            {row.map((value, columnBox) => (
              <Box
                key={`${rowBox}-${columnBox}`}
                rowBox={rowBox}
                columnBox={columnBox}
                value={value}
                handlePress={handlePress}
                isGameOver={isGameOver}
              />
            ))}
          </View>
        ))}
        {isGameOver && (
          <View style={styles.reset}>
            <Text style={styles.gameOverText}>Game Over</Text>
          </View>
        )}
        {isGameOver && (
          <Pressable style={styles.reset} onPress={retry}>
            <Text style={styles.resetBtn}>Reset</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
