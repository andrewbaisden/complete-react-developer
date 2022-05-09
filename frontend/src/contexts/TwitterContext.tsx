import { useEffect, useState, createContext, useContext } from 'react';

interface ContextProps {
	data: any;
	loading: boolean;
	handleToggleComposetweet: any;
	toggleComposeTweet: boolean;
	tweet: string;
	setTweet: any;
	postTweet: any;
	deleteTweet: any;
}

const TwitterContext = createContext({} as ContextProps);

export const useTwitter = () => useContext(TwitterContext);

const TwitterContextProvider = (props: any): any => {
	useEffect(() => {
		const getTweets = () => {
			const API = 'http://localhost:8080/tweets';

			fetch(API)
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((data) => {
					console.log(data);
					setLoading(false);
					setData(data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getTweets();
	}, []);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [toggleComposeTweet, setToggleComposeTweet] = useState(false);
	const [tweet, setTweet] = useState('');

	const handleToggleComposetweet = () => {
		toggleComposeTweet === true ? setToggleComposeTweet(false) : setToggleComposeTweet(true);
	};

	const postTweet = () => {
		if (tweet === '') {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');

			let raw = JSON.stringify({
				tweet: 'Congratulations this is what happens when you post an empty tweet 🤪 Create some validation 🙃',
				img: '',
			});

			fetch('http://localhost:8080/tweets', { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' })
				.then((response) => response.text())
				.then((result) => console.log(result))
				.catch((error) => console.log('error', error));
		} else {
			let myHeaders = new Headers();
			myHeaders.append('Content-Type', 'application/json');

			let raw = JSON.stringify({
				tweet: tweet,
				img: '',
			});

			fetch('http://localhost:8080/tweets', { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' })
				.then((response) => response.text())
				.then((result) => console.log(result))
				.catch((error) => console.log('error', error));
		}
	};

	const deleteTweet = (tweetId: string) => {
		console.log('Deleted', tweetId);
		let urlencoded = new URLSearchParams();

		fetch(`http://localhost:8080/tweets/${tweetId}`, {
			method: 'DELETE',
			body: urlencoded,
			redirect: 'follow',
		})
			.then((response) => response.text())
			.then((result) => console.log(result))
			.catch((error) => console.log('error', error));

		window.location.reload();
	};

	const value = {
		data,
		loading,
		toggleComposeTweet,
		handleToggleComposetweet,
		postTweet,
		tweet,
		setTweet,
		deleteTweet,
	};

	return <TwitterContext.Provider value={value}>{props.children}</TwitterContext.Provider>;
};

export default TwitterContextProvider;
