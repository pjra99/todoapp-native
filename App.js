import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
export default function App() {
  const [list, setList] = useState(["mango", "sango", "ango"]);
  const [currInputVal, setCurrInputVal] = useState("");

  const handleAddItem = () => {
    let ar = [...list];

    for (let i = 0; i < ar.length; i++) {
      if (ar[i] == currInputVal) {
        alert("Item already exist!");
        return;
      }
    }

    ar.push(currInputVal);
    setList(ar);
  };
  const handleDeleteItem = (item) => {
    let ar = [...list];
    ar = ar.filter((i) => i != item);
    setList(ar);
  };
  const items = list.map((item, key) => (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 10,
        justifyContent: "space-around",
      }}
      key={key}
    >
      <Text
        key={key}
        style={{
          fontSize: 20,
          paddingBottom: 10,
        }}
      >
        {item}
      </Text>
      <Button title="Delete" onPress={() => handleDeleteItem(item)}></Button>
    </View>
  ));
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Todo App
      </Text>
      <TextInput
        placeholder="Add Items"
        onChangeText={(e) => setCurrInputVal(e)}
        defaultValue={currInputVal}
        style={{
          textAlign: "center",
          margin: 10,
          height: 45,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "grey",
        }}
      ></TextInput>
      <View
        style={{
          marginLeft: 15,
          marginBottom: 5,
        }}
      >
        {items}
      </View>
      <View
        style={{
          height: 50,
        }}
      ></View>
      <Button
        onPress={handleAddItem}
        title="Add task"
        style={{
          margin: 5,
        }}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
