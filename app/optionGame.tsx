import { Level, useOptionStore } from "@/store/useOptionStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, Text, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

const levels: Level[] = [
  { name: "easy", bombs: 20, cellWidth: 10 },
  { name: "medium", bombs: 40, cellWidth: 20 },
  { name: "hard", bombs: 60, cellWidth: 30 },
];

const closestDiv10 = (n: number) => Math.round(n / 10) * 10;

const { width } = Dimensions.get("screen");

const getVolume = (value: number) =>
  value > 100 ? 100 : value < 0 ? 0 : value;

const OptionGame = () => {
  const router = useRouter();
  const { level, vibrationOnLose, volume } = useOptionStore(
    useShallow((state) => ({
      volume: state.volume,
      level: state.level,
      vibrationOnLose: state.vibrationOnLose,
    }))
  );
  const savedLevelIndex = levels.findIndex((l) => l.name === level.name);

  const [volumeState, setVolumeState] = useState(volume);
  const [levelState, setLevelState] = useState<number>(savedLevelIndex);
  const [vibrationOnLoseState, setVibrationOnLose] = useState(vibrationOnLose);

  useEffect(() => {
    setLevelState(savedLevelIndex);
  }, [savedLevelIndex]);

  useEffect(() => {
    setVolumeState(volumeState);
  }, [volume]);

  const handlePressSaveButton = () => {
    setVolumeState(volumeState),
      setLevelState(levelState),
      setVibrationOnLose(vibrationOnLoseState);
    router.back();
  };
  const handleChangeVolumeState = (increase: boolean) => () => {
    setVolumeState(getVolume(increase ? volumeState + 10 : volumeState - 10));
  };
  return (
    <ScrollView>
      <View>
        <View>
          <Text>Musics</Text>
        </View>
        <View className="d-flex flew-row justify-between items-center my-5">
          <AntDesign
            name="plus"
            size={24}
            color="black"
            onPress={handleChangeVolumeState(true)}
          />
          <Slider
            style={{ width: width / 2, height: 40 }}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={volumeState}
            onValueChange={(value) => setVolumeState(closestDiv10(value))}
          />
          <AntDesign
            name="minus"
            size={24}
            color="black"
            onPress={handleChangeVolumeState(false)}
          />
          <AntDesign
            name="muted"
            size={24}
            color="                               "
            onPress={() => setVolumeState(0)}
          />
          <Text>{volumeState}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Vibrations</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Levels</Text>
        </View>
      </View>
      <View>
        <View>
          <Button
            title="Save"
            color="#7ddf5fff"
            accessibilityLabel="save changes"
          />{" "}
        </View>
      </View>
    </ScrollView>
  );
};

export default OptionGame;
