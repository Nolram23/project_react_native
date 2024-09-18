import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function CustomSearchBar({ placeholder, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query); // Pasar la búsqueda al componente padre si existe una función
    }
  };

  return (
    <View style={styles.searchBarContainer}>
      <Ionicons name="search" size={24} color="gray" />
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder || 'Search...'}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor="gray"
      />
      {searchQuery ? (
        <Ionicons
          name="close-circle"
          size={24}
          color="gray"
          onPress={() => handleSearch('')} // Limpiar la búsqueda
          style={styles.clearIcon}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  clearIcon: {
    marginLeft: 5,
  },
});
