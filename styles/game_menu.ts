import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 50,
  },
  gameMenu: {
    backgroundColor: " red",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  resetBtn: {
    backgroundColor: "darkgreen",
    padding: 10,
    fontSize: 20,
    color: "white",
    borderRadius: 10,
    fontWeight: "bold",
  },
});
