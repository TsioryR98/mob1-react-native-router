import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    backgroundColor: "blue",
    padding: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  horizontalLine: {
    display: "flex",
    flexDirection: "column",
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
  },
  onPressBoxBase: {
    width: 20,
    height: 20,
    backgroundColor: "#1bb5fc",
    borderColor: "black",
    borderWidth: 1,
  },
  resetBtn: {
    backgroundColor: "darkgreen",
    padding: 10,
    fontSize: 20,
    color: "white",
    borderRadius: 10,
    fontWeight: "bold",
  },
  reset: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  /* put in array with dynamic styles  */
  gameOverText: {
    backgroundColor: "red",
    padding: 10,
    fontSize: 20,
  },
});
