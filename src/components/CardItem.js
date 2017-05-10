import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = (props) => (
	<View style={styles.cardItem}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
  cardItem: {
	justifyContent: 'flex-start',
	flexDirection: 'row',
	padding: 5
  }
});

export default CardItem;
