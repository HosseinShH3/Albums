import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => (
	<TouchableOpacity onPress={onPress} style={styles.buttonClick}>
		<Text style={{ color: '#007aff', textAlign: 'center' }}>{text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonClick: {
	flex: 1,
	borderRadius: 15,
	borderColor: '#007aff',
	borderWidth: 1,
	padding: 10,
	alignSelf: 'stretch'
  }
});

export default Button;
