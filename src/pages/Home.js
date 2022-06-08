import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { Icon, TextArea } from "web3uikit";
import TweetInFeed from "../components/TweetInFeed";
import { useMoralis } from "react-moralis";

const Home = () => {
	const inputFile = useRef(null);
	const [selectedFile, setSelectedFile] = useState();
	const { Moralis, user } = useMoralis();
	const [theFile, setTheFile] = useState();
	const [tweet, setTweet] = useState();

	const saveTweet = async () => {
		if (!tweet) return;

		const Tweet = Moralis.Object.extend("Tweets");
		const newTweet = new Tweet();

		newTweet.set("tweetTxt", tweet);
		newTweet.set("tweeterPfp", user.attributes.pfp);
		newTweet.set("tweeterAcc", user.attributes.ethAddress);
		newTweet.set("tweeterUsername", user.attributes.username);

		if (theFile) {
			const data = theFile;
			const file = new Moralis.File(data.name, data);
			await file.saveIPFS();
			newTweet.set("tweetImg", file.ipfs());
		}

		await newTweet.save();
		window.location.reload();
	};

	const onImageClick = () => {
		inputFile.current.click();
	};

	const changeHandler = (e) => {
		const img = e.target.files[0];
		setTheFile(img);
		setSelectedFile(URL.createObjectURL(img));
	};

	return (
		<>
			<div className="pageIdentify"> Home </div>
			<div className="mainContent">
				<div className="profileTweet">
					<img
						src={
							user.attributes.pfp
								? user.attributes.pfp
								: defaultImgs[0]
						}
						className="profilePic"
					/>
					<div className="tweetBox">
						<TextArea
							label=""
							name="tweetTxtArea"
							value="Hello World!"
							type="text"
							width="95%"
							placeholder="Type Your Text Here"
							className="tweetBox"
							onChange={(e) => setTweet(e.target.value)}
						/>
						{selectedFile && (
							<img src={selectedFile} className="tweetImg" />
						)}
						<div className="imgOrTweet">
							<div className="imgDiv" onClick={onImageClick}>
								<input
									type={"file"}
									name="file"
									ref={inputFile}
									onChange={changeHandler}
									style={{ display: "none" }}
								/>
								<Icon fill="#1DA1F2" size={20} svg="image" />
							</div>
							<div className="tweetOptions">
								<div
									className="tweet"
									onClick={() => saveTweet()}
								>
									Tweet
								</div>
								<div
									className="tweet"
									style={{ backgroundColor: "#8247e5" }}
								>
									<Icon
										fill="#ffffff"
										size={20}
										svg="matic"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<TweetInFeed profile={false} />
			</div>
		</>
	);
};

export default Home;
