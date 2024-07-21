import { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { openBrowserAsync } from 'expo-web-browser';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [url, setUrl] = useState<string>('');
  const [result, setResult] = useState<unknown>(null);

  const handleOpenPress = async () => {
    let result = await openBrowserAsync(url);
    setResult(result);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Built-in Browser Runner</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Enter the URL</ThemedText>
        <TextInput
          style={styles.textInput}
          onChangeText={setUrl}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Step 2: Open it in built-in browser
        </ThemedText>
        <TouchableOpacity style={styles.btn} onPress={handleOpenPress}>
          <ThemedText style={styles.btnTxt}>Open</ThemedText>
        </TouchableOpacity>
        <ThemedText>{result ? JSON.stringify(result) : ''}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textInput: {
    borderColor: '#bec3c9',
    borderWidth: 1,
    borderRadius: 3,
    padding: 3,
  },
  btn: {
    width: 200,
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#06bcee',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
});
