import { useState } from "react";
import { Text, View } from "react-native";
import { Box } from "../components/box-case";
import { styles } from "../styles/styles_global";
import boardCreation from "../utilities/board-creation";

export default function main() {
  const tab = boardCreation(20);
  const [boxState, setBoxState] = useState(tab);

  const handlePress = (rowBox: number, columnBox: number, value: number) => {
    const newTab = boxState.map((row) => [...row]);
    newTab[rowBox][columnBox] = value === 1 ? 0 : 1;
    setBoxState(newTab);
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
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.reset}>
        <Text style={styles.resetBtn}>Reset</Text>
      </View>
    </View>
  );
}
