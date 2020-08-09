/** @format */

import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		axios
			.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => setAlbums(response.data));
	}, []);

	const renderAlbums = () => {
		return albums.map((album) => (
			<AlbumDetail key={album.title} album={album} />
		));
	};
	return <ScrollView>{renderAlbums()}</ScrollView>;
};

export default AlbumList;
