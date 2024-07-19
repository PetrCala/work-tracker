import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import {saveData, getAllCompanies} from '../database';

const DataEntry: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [hoursWorked, setHoursWorked] = useState<string>('');
  const [companies, setCompanies] = useState<{id: number; name: string}[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     const companiesList = await getAllCompanies();
  //     setCompanies(companiesList);
  //   };
  //   fetchCompanies();
  // }, []);

  /**
   * Handles the submission of the form.
   */
  const handleSubmit = async (): Promise<void> => {
    if (!selectedCompany) {
      Alert.alert('Please select a company.');
      return;
    }
    try {
      console.debug('Saving data...');
      // await saveData(date, Number(hoursWorked), selectedCompany);
      Alert.alert('Data saved successfully!');
    } catch (error: any) {
      Alert.alert('Failed to save data: ' + error.message);
    }
    // Clear the input fields
    setDate('');
    setHoursWorked('');
    setSelectedCompany(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
      />
      <Text style={styles.label}>Hours Worked:</Text>
      <TextInput
        style={styles.input}
        value={hoursWorked}
        onChangeText={setHoursWorked}
        keyboardType="numeric"
        placeholder="Enter hours worked"
      />
      <Text style={styles.label}>Company:</Text>
      <Picker
        selectedValue={selectedCompany}
        style={styles.picker}
        onValueChange={itemValue => setSelectedCompany(itemValue)}>
        <Picker.Item label="Select a company" value={null} />
        {companies.map(company => (
          <Picker.Item
            key={company.id}
            label={company.name}
            value={company.id}
          />
        ))}
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default DataEntry;
