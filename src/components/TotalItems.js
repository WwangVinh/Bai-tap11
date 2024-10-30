import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const TotalItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <View style={styles.container}>
      <Text>Tổng số công việc: {todos.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
});


export default TotalItems;
