import "../global.css";

import { Level, useOptionStore } from "@/store/useOptionStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import Dropdown from "react-native-input-select";

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
      <View className="p-10">
        <View>
          <Text>Musics</Text>
        </View>
        <View className="flex flex-row justify-around items-center my-4">
          <Pressable onPress={handleChangeVolumeState(true)}>
            <AntDesign name="plus" size={24} color="black" />
          </Pressable>
          <Slider
            style={{ width: width * 0.6, height: 40 }}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={volumeState}
            onValueChange={(value) => setVolumeState(closestDiv10(value))}
          />
          <Pressable onPress={handleChangeVolumeState(false)}>
            <AntDesign name="minus" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => setVolumeState(0)}>
            <AntDesign
              name="muted"
              size={24}
              color="                               "
            />
          </Pressable>
        </View>
        <View>
          <Text>{vibrationOnLoseState ? "activate" : "desactivate"}</Text>
          <Switch
            value={vibrationOnLoseState}
            onValueChange={(v) => setVibrationOnLose(v)}
          />
        </View>
        <View>
          <View>
            <Text>Levels</Text>
          </View>
          <View className="flex flex-row justify-center items-center my-5">
            <Dropdown
              label=""
              placeholder="Choose level"
              isMultiple={false}
              options={[
                { label: "easy", value: 0 },
                { label: "medium", value: 1 },
                { label: "hard", value: 2 },
              ]}
              selectedValue={levelState}
              onValueChange={(selected: any) => setLevelState(selected)}
              minSelectableItems={1}
              maxSelectableItems={1}
              primaryColor={"green"}
              dropdownContainerStyle={{
                borderColor: "blue",
                borderWidth: 2,
                borderRadius: 5,
                marginTop: 5,
                position: "relative",
                display: "flex",
                height: 50,
                alignItems: "flex-start",
                paddingInline: 10,
              }}
              dropdownIconStyle={{
                top: 22,
                right: 22,
              }}
            />
          </View>
        </View>
        <View>
          <Button
            title="Save"
            color="#7ddf5fff"
            accessibilityLabel="save changes"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OptionGame;
