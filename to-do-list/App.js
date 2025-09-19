
import { StyleSheet, Text, TextInput, View  } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  return (
    <SafeAreaView>
      <TodoScreen/>
      <TextInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
