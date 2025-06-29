import React, { useState, useContext } from "react";
import { View, TextInput, Button } from "react-native";
import { TaskContext } from "../context/TaskContext";
import uuid from "react-native-uuid";

export default function AddTaskScreen({ route, navigation }) {
  const { task } = route.params || {};
  const [title, setTitle] = useState(task?.title || "");
  const { addTask, updateTask } = useContext(TaskContext);

  const saveTask = () => {
    if (task) {
      updateTask({ ...task, title });
    } else {
      addTask({ id: uuid.v4(), title, completed: false });
    }
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={{ fontSize: 18, borderBottomWidth: 1 }}
      />
      <Button title="Save Task" onPress={saveTask} />
    </View>
  );
}
