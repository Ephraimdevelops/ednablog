import React from "react";
import YouTube from "react-youtube";
import styles from '../styles/youtube.module.css'
import {youtubevids} from '../components/data'
import Link from "next/link";

export default class YoutubeVideoo
extends React.Component {
render() {
	const opts = {
	height: "400",
	width: "345",
	playerVars: {
		autoplay: 1,
	},
	};

    {youtubevids.map((youtubevid) => {
    const { id, url, title, tubeid } = youtubevid;
        return (
            <Link href={url}>
            <div key={id}className={styles.videocontainer}>
		        <YouTube videoId={tubeid}
			    opts={opts} onReady={this._onReady} />
                <div>
                    <h3>{title}</h3>
                </div>

	        </div>
            </Link>
        );
    })};
}
}
