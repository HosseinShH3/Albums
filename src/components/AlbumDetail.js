import React from 'react';
import { Text, View, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;
	return (
		<Card>
			<CardItem>
				<View style={styles.firstCardImageView}>
					<Image style={styles.topImage} source={{ uri: thumbnail_image }} />
				</View>
				<View style={styles.firstCardTitleView}>
					<Text style={styles.headerTitle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardItem>
			<CardItem>
				<Image style={styles.botImage} source={{ uri: image }} />
			</CardItem>
			<CardItem>
				<Button onPress={() => Linking.openURL(url)} text={`Buy ${title}`} />
			</CardItem>
		</Card>
	);
};

const styles = StyleSheet.create({
  firstCardTitleView: {
	justifyContent: 'space-around',
	alignItems: 'flex-start',
	flexDirection: 'column',
	marginLeft: 10
  },
  firstCardImageView: {
	alignItems: 'flex-start'
  },
  topImage: {
	width: 60,
	height: 60,
	borderRadius: 30,
	marginLeft: 10
  },
  headerTitle: {
	fontSize: 18
  },
  botImage: {
	flex: 1,
	height: 300,
	marginTop: 10,
	width: null
  }
});

export default AlbumDetail;
