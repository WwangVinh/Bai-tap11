import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <View style={styles.listContainer}>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.item}>
          <Text style={styles.itemText}>{todo.text}</Text>
          <Button
            title="Xóa"
            onPress={() => dispatch(removeTodo(todo.id))}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  itemText: {
    fontSize: 16,
  },
});

export default TodoList;
