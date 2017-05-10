import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => (
	<View style={styles.header}>
		<Text style={styles.text}> {props.title} </Text>
	</View>
);

const styles = StyleSheet.create({
  text: {
	fontSize: 20
  },
  header: {
	backgroundColor: '#f8f8f8',
	justifyContent: 'center',
	alignItems: 'center',
	height: 50,
	elevation: 4,
	position: 'relative'
  }
});

export default Header;
