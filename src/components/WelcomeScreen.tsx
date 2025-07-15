import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { InMemorySearchService } from '../services/InMemorySearchService';
import type { SearchResult } from '../services/SearchService';

const service = new InMemorySearchService();

export default function WelcomeScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChangeText = (text: string) => {
    setQuery(text);
    setResults(service.searchByName(text));
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.cemetery}>{item.cemetery?.name} - {item.cemeteryCode}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Necro Maps</Text>
      <TextInput
        style={styles.input}
        placeholder="Cerca per nome e cognome"
        value={query}
        onChangeText={onChangeText}
      />
      <FlatList
        data={results}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 20
  },
  item: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  name: {
    fontWeight: 'bold'
  },
  cemetery: {
    color: '#666'
  }
});
