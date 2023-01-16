import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
export default function App() {
  const [count, increment] = useState(0);
  const [list, setList] = useState(["mango", "sango", "ango"]);
  const [currInputVal, setCurrInputVal] = useState("");

  const hanndleAddItem = () => {
    let ar = [...list];
    ar.push(currInputVal);
    setList(ar);
  };
  const items = list.map((item, key) => <Text>{item}</Text>);
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
        onPress={hanndleAddItem}
        title="Add Item"
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
