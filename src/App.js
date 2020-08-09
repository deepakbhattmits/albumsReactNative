/** @format */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
const App = () => {
	const { mainContainer } = styles;
	return (
		<View style={mainContainer}>
			<Header headerText='Albums' />
			<AlbumList />
		</View>
	);
};
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});

export default App;
