import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReduxProvider from './src/redux/store';
import AddTodoForm from './src/components/AddTodoForm';
import TodoList from './src/components/TodoList';
import TotalItems from './src/components/TotalItems';

const App = () => {
  return (
    <ReduxProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Nhập công việc</Text>
        <AddTodoForm />
        <Text style={styles.header}>Danh sách công việc</Text>
        <TodoList />
        <TotalItems />
      </View>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40, // Thêm khoảng cách phía trên tiêu đề
    color: 'black',
  },
});

  

export default App;

