import React from "react";
import YouTube from "react-youtube";
import styles from '../styles/youtube.module.css'

export default class YoutubeVideo
extends React.Component {
render() {
	const opts = {
	height: "400",
	width: "345",
	playerVars: {
		autoplay: 1,
	},
	};

	return (
	<div className={styles.videocontainer}>
		<YouTube videoId="DlzNaXz0jv4"
			opts={opts} onReady={this._onReady} />
	</div>
	);
}

_onReady(event) {
	event.target.pauseVideo();
}
};
