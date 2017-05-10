import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
	<View style={styles.container}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
  container: {
	borderRadius: 5,
	elevation: 2,
	marginRight: 5,
	marginLeft: 5,
	marginBottom: 10,
	marginTop: 5,
	backgroundColor: '#fff'
  }
});

export default Card;
