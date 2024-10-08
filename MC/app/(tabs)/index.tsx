import { Image, StyleSheet } from 'react-native';

import CustomSearchBar from '@/components/CustomSearchBar';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const handleSearch = (query: any) => {
    console.log('Searching for:', query);
    // Aquí podrías implementar la lógica de búsqueda (por ejemplo, filtrar productos o medicamentos).
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFF', dark: '#000' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Look for a medicine: </ThemedText>
        <ThemedText>
          
        </ThemedText>
        <CustomSearchBar placeholder={'Search...'} onSearch={handleSearch} />
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
    margin: 'auto',
    position: 'relative',
  },
  searchBar: {
    backgroundColor: '#FFF'
  }
});
