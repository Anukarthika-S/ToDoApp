import React, { useContext } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { TaskContext } from "../context/TaskContext";

export default function HomeScreen({ navigation }) {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No tasks found</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => deleteTask(item.id)}
            onPress={() => navigation.navigate("AddTask", { task: item })}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: "#6200ee",
          padding: 15,
          borderRadius: 30,
        }}
        onPress={() => navigation.navigate("AddTask")}
      >
        <Text style={{ color: "#fff" }}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
