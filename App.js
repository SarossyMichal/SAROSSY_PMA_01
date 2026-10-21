import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import Item from './src/components/Item';

export default function App() {


  const[text, setText] = useState("");
  const[tasks, setTasks] = useState([]);





  function handleAddTask() {
    setTasks([...tasks, text]);
  }
  




  function handleInputText(text) {
    setText(text);

    console.log(text);
    
  }


  return (




    <View style={styles.container}>



      
      <View style={styles.inputContainer}>
        <TextInput 
        onChangeText={handleInputText} 
        style={styles.input} 
        placeholder="zadaj ulohu " />
        



        <Button 
        onPress={handleAddTask} 
        title="ADD" 
        color="#538b77" /> 
      </View>

      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <Item title={item} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },




  inputContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 24,
    flexDirection: 'row', 
    gap: 12,
    backgroundColor: '#c4c5ea', 
  },



  taskContainer: {
    flex: 3, 
    borderTopWidth: 1, 
    borderTopColor: '#cccccc',
    padding: 24,
    backgroundColor: '#dde0b8', 
  },





  input: {
    borderWidth: 2,
    borderColor: '#040000',
    borderRadius: 12,
    width: '70%',
    paddingHorizontal: 12, 
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },




  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  }
});