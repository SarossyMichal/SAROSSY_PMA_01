import { StatusBar } from 'expo-status-bar';
import { Button, Text, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="zadaj ulohu " />
        
        <Button title="ADD" color="#538b77" /> 
      </View>

      
      <View style={styles.taskContainer}>
        <Text style={styles.titleText}>ULOHY::::::::::</Text>
      </View>
      
      <StatusBar style="auto" />
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