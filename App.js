import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>
      </View>
      <View style={styles.items} >
        <Task text={'Task 1'} />
        <Task text={'Task 2'} />
        <Task text={'Task 3'} />
      </View>
    
    {/* to add new tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height":"padding" } 
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'write a task'} />
          <TouchableOpacity>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  }
});
