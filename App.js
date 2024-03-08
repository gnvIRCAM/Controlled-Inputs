import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
       {/* Uncontrolled TextInput */}
      <TextInput
        onChangeText={(t) => setText(t)}
        placeholder='Enter text (uncontrolled)'
      />

      {/* Controlled TextInput */}
      <TextInput
        value={text}
        onChangeText={(t) => setText(t)}
        placeholder='Enter text (controlled)'
      />
      <Text>My text : {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
