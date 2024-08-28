import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [lowerBound, setLowerBound] = useState(0)
  const [upperBound, setUpperBound] = useState(0)
  const [age, setAge] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Age</Text>
      <TextInput placeholder='Input age here...'
                 style={styles.input}
                 onChangeText={(val) => setAge(val)}>
      </TextInput>
      <Text style={styles.text}>Limits</Text>
      <Text style={styles.text}>{lowerBound}-{upperBound}</Text>
      <View style={styles.button}>
        <Button onPress={() => {
            setLowerBound((220-age) * 0.65);
            setUpperBound((220-age) * 0.85);
          }}
          title="Calculate"
          style={styles.button}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingTop: 50,
},
  input: {
    fontSize: 22,
  },
  text: {
    fontSize: 18,
  },
  button: {
    padding: 5,
    height: 200,
    width: 300,
  }
});
