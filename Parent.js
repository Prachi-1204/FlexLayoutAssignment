import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

const Parent = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        if (editIndex < updatedTasks.length) {
          updatedTasks[editIndex].text = task;
          setTasks(updatedTasks);
          setTask('');
          setEditIndex(-1);
        }
      } else {
        setTasks([...tasks, {text: task, isCompleted: false}]);
        setTask('');
      }
    } else {
      Alert.alert('Please enter your task....');
    }
  };

  const handleCompleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };
  const handleRemoveTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const handleEditTask = index => {
    setTask(tasks[index].text);
    setEditIndex(index);
  };
  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          item.isCompleted && {
            textDecorationLine: 'line-through',
            color: 'maroon',
          },
        ]}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => handleCompleteTask(index)}
          disabled={item.isCompleted}>
          <Text
            style={[
              styles.completeButton,
              item.isCompleted ? {color: 'gray'} : {color: 'maroon'},
            ]}>
            {item.isCompleted ? '' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoveTask(index)}>
          <Text style={styles.removeButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>ToDo List</Text>

      <Text style={styles.title}>Add your Task...</Text>

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Enter your task"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? 'Update' : 'Add'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{padding: '5%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    color: 'maroon',
    padding: '8%',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 50,
    padding: '2%',
    fontWeight: 'bold',
    backgroundColor: 'maroon',
    width: '100%',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  box: {
    padding: '3%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'maroon',
    padding: 10,

    borderRadius: 50,
    fontSize: 18,
    width: '71%',
  },
  addButton: {
    backgroundColor: 'maroon',
    padding: 15,
    borderRadius: 50,
    width: '28%',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    width: '40%',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  taskButtons: {
    flexDirection: 'row',
  },
  completeButton: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: '2%',
  },
  editButton: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: '2%',
    color: 'maroon',
  },
  removeButton: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'maroon',
  },
});

export default Parent;
