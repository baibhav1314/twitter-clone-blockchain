import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea } from "web3uikit";
const Home = () => {
	return (
		<>
			<div className="mainContent">
				<div className="profileTweet">
					<img src={defaultImgs[0]} className="profilePic" />
					<div className="tweetBox">
						<TextArea
							label=""
							name="tweetTxtArea"
							value="Hello World!"
							type="text"
							width="95%"
							placeholder="Type Your Text Here"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
