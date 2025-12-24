import GameButton from "@/components/GameMenuButton";
import { styles } from "@/styles/game_menu";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.gameMenu}>
        <GameButton title="New Game" onPress={() => router.push("/gamePlay")} />
        <GameButton
          title="Continue Game"
          onPress={() => router.push("/gamePlay")}
        />
        <GameButton
          title="Options"
          onPress={() => router.push("/optionGame")}
        />
        {/** new route */}
        <GameButton title="Help" onPress={() => router.push("/gamePlay")} />
      </View>
    </View>
  );
};
export default Home;
