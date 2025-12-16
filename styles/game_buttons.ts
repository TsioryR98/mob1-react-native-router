import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // shadows Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonPressed: {
    opacity: 0.7, // Effect on clic
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
