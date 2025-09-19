import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import FallBack from "../components/FallBack";
// const dummyData = [
//   {
//     id: "01",
//     title: "Read a Book",
//   },
//   {
//     id: "02",
//     title: "Wash Car",
//   },
// ];
const TodoScreen = () => {
  // Init local states
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);
  // Handle add to do
  const handleAddTodo = () => {
    // structure of a single todo item
    // {
    //     id:
    //     title:
    // }
    if(todo==""){
      return
    }
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    // spread operator used to to copy the todoList as we directly cannot acces it
  };
  const handleDelTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
  // Hadnle edit to-do
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };
  // HAndle update
  const handleUpdateTodo = () => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id == editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodoList(updatedTodoList);
    setEditedTodo(null);
    setTodo("");
  };
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          backgroundColor: "#1e90ff",
          borderRadius: 6,
          paddingHorizontal: 6,
          paddingVertical: 12,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          // Shadow for iOS
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 6,
        }}
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "800", flex: 1 }}
        >
          {item.title}
        </Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => handleDelTodo(item.id)}
        />
      </View>
    );
  };
  return (
    <View style={{ marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        placeholder="ADD A TASK..."
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />

      {editedTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleUpdateTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Save
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            borderRadius: 6,
            paddingVertical: 12,
            marginVertical: 34,
            alignItems: "center",
          }}
          onPress={() => handleAddTodo()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            ADD
          </Text>
        </TouchableOpacity>
      )}
      {/* render to do list */}
      {/* <FlatList data={todoList} renderItem={renderTodos} /> */}
      {todoList.length <= 0 ? (
        <FallBack />
      ) : (
        <FlatList data={todoList} renderItem={renderTodos} />
      )}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
