import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "grey",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  game_menu: {},
  resetBtn: {
    backgroundColor: "darkgreen",
    padding: 10,
    fontSize: 20,
    color: "white",
    borderRadius: 10,
    fontWeight: "bold",
  },
});
