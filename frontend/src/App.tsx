import TwitterMenu from './stories/TwitterMenu/TwitterMenu';
import { useTwitter } from './contexts/TwitterContext';
import './App.css';

const App = () => {
	const { data, loading, handleToggleComposetweet, deleteTweet, toggleComposeTweet, postTweet, tweet, setTweet } =
		useTwitter();
	return (
		<>
			<div className="compose-tweet-container" style={{ display: toggleComposeTweet === true ? 'flex' : 'none' }}>
				<div className="compose-tweet-profile">
					<button onClick={handleToggleComposetweet}>X</button>
					<div className="profile-picture"></div>
				</div>
				<div className="compose-tweet-content">
					<form onSubmit={postTweet}>
						<textarea
							name="tweet"
							placeholder="What's happening?"
							value={tweet}
							onChange={(e) => setTweet(e.target.value)}
						></textarea>
						<div className="compose-tweet-post">
							<input value="Tweet" type="submit" name="postTweet" className="post-tweet-btn" />
						</div>
					</form>
				</div>
			</div>
			<div className="container">
				<TwitterMenu
					home="Home"
					explore="Explore"
					notifications="Notifications"
					messages="Messages"
					bookmarks="Bookmarks"
					lists="Lists"
					profile="Profile"
					more="More"
				/>
				<main>
					<div className="twitter-profile-main">
						<div className="twitter-profile-main-tweets">
							<div>
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="#ffffff">
									<g>
										<path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
									</g>
								</svg>
							</div>
							<div>
								<h1>Levi Ackerman</h1>
								<p>13.5k Tweets</p>
							</div>
						</div>
						<div className="twitter-profile-main-header">
							<div className="twitter-profile-main-header-image"></div>
							<div className="profile-image-main"></div>
							<div className="twitter-profile-edit">
								<button>Edit profile</button>
							</div>
						</div>
						<div className="twitter-profile-main-name">
							<h1>Levi Ackerman</h1>
							<p>@leviackerman</p>
						</div>
						<div className="twitter-profile-main-description">
							⚛️ Software Developer | 🌅 Technical Writer | 🎨 Content Creator | 📝 1 Million+ Subscribers
						</div>
						<div className="twitter-profile-main-stats">
							<div>
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(139, 152, 165)">
									<g>
										<path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"></path>
										<path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"></path>
									</g>
								</svg>
								<p>Paradis Island</p>
							</div>
							<div>
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(139, 152, 165)">
									<g>
										<path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"></path>
										<path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"></path>
									</g>
								</svg>
								<p>
									<a href="/">limey.io/leviackerman</a>
								</p>
							</div>
							<div>
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(139, 152, 165)">
									<g>
										<path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path>
										<circle cx="7.032" cy="8.75" r="1.285"></circle>
										<circle cx="7.032" cy="13.156" r="1.285"></circle>
										<circle cx="16.968" cy="8.75" r="1.285"></circle>
										<circle cx="16.968" cy="13.156" r="1.285"></circle>
										<circle cx="12" cy="8.75" r="1.285"></circle>
										<circle cx="12" cy="13.156" r="1.285"></circle>
										<circle cx="7.032" cy="17.486" r="1.285"></circle>
										<circle cx="12" cy="17.486" r="1.285"></circle>
									</g>
								</svg>
								<p>Joined January 2012</p>
							</div>
						</div>
						<div className="twitter-profile-main-followers">
							<p className="twitter-following">
								100 <span>Following</span>
							</p>
							<p>
								300K <span>Followers</span>
							</p>
						</div>
						<div className="twitter-profile-main-navigation">
							<nav>
								<a href="/" className="selected">
									<strong>Tweets</strong>
								</a>
								<a href="/" className="unselected">
									Tweets & replies
								</a>
								<a href="/" className="unselected">
									Media
								</a>
								<a href="/" className="unselected">
									Likes
								</a>
							</nav>
						</div>
					</div>
					{/* Posted Tweets */}
					{loading ? (
						<div>
							<p>Loading...</p>
						</div>
					) : (
						<div>
							{data?.map((tweet: any) => (
								<div className="twitter-profile-main-tweets" key={tweet._id}>
									<div className="twitter-profile-picture-container">
										<div className="profile-picture"></div>
									</div>
									<div className="twitter-profile-main-tweets-content">
										<div className="twitter-profile-main-tweets-header">
											<p>
												Levi Ackerman <span>@leviackerman May 2</span>
											</p>

											<button onClick={() => deleteTweet(tweet._id)}>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="rgb(139, 152, 165)">
													<g>
														<path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path>
														<path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path>
													</g>
												</svg>
											</button>
										</div>
										<div className="twitter-profile-main-tweets-post">
											<p>{tweet.tweet}</p>
											{tweet.img === '' ? <div></div> : <img src={tweet.img} alt="Tweet Media" />}
										</div>
										<div className="twitter-profile-main-tweets-social">
											<div>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="#8b98a5">
													<g>
														<path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
													</g>
												</svg>
											</div>
											<div>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="#8b98a5">
													<g>
														<path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path>
													</g>
												</svg>
											</div>
											<div>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="#8b98a5">
													<g>
														<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
													</g>
												</svg>
											</div>
											<div>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="#8b98a5">
													<g>
														<path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
														<path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
													</g>
												</svg>
											</div>
											<div>
												<svg viewBox="0 0 24 24" aria-hidden="true" fill="#8b98a5">
													<g>
														<path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path>
													</g>
												</svg>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</main>
				<article>
					<section>
						<div>
							<form className="nosubmit">
								<input className="nosubmit" type="search" placeholder="Search Twitter" />
							</form>
						</div>
						<div className="twitter-gallery">
							<div className="twitter-gallery-image twitter-gallery-image-top-left-round"></div>
							<div className="twitter-gallery-image"></div>
							<div className="twitter-gallery-image twitter-gallery-image-top-right-round"></div>
							<div className="twitter-gallery-image twitter-gallery-image-bottom-left-round"></div>
							<div className="twitter-gallery-image"></div>
							<div className="twitter-gallery-image twitter-gallery-image-bottom-right-round"></div>
						</div>
						<div className="you-might-like">
							<h1>You might like</h1>

							<div className="twitter-profile-accounts-users">
								<div className="user-profile">
									<div className="profile-picture"></div>
									<div>
										<h1>Eren Yeager</h1>
										<p>@erenyeager</p>
									</div>
								</div>
								<div>
									<button>Follow</button>
								</div>
							</div>
							<div className="twitter-profile-accounts-users">
								<div className="user-profile">
									<div className="profile-picture"></div>
									<div>
										<h1>Mikasa Ackerman</h1>
										<p>@mikasaackerman</p>
									</div>
								</div>
								<div>
									<button>Follow</button>
								</div>
							</div>
							<a href="/">Show more</a>
						</div>
						<div className="whats-happening">
							<h1>Whats happening</h1>
							<div className="twitter-trending">
								<div className="twitter-trending-content">
									<p>Holidays - LIVE</p>
									<h1>It's May the Fourth</h1>
									<p>64k Tweets</p>
								</div>
								<div className="twitter-trending-content-img"></div>
							</div>
							<div className="twitter-trending">
								<div className="twitter-trending-content">
									<p>Trending in United Kingdom</p>
									<h1>Pfizer</h1>
									<p>305K Tweets</p>
								</div>
								<div className="twitter-trending-content-img"></div>
							</div>
							<div className="twitter-trending">
								<div className="twitter-trending-content">
									<p>Entertainment - Trending</p>
									<h1>Elizabeth Olsen</h1>
									<p>38.9K Tweets</p>
								</div>
								<div className="twitter-trending-content-img"></div>
							</div>
							<div className="twitter-trending">
								<div className="twitter-trending-content">
									<p>UK national news - LIVE</p>
									<h1>Summer heatwave predicted</h1>
									<p>2,145 Tweets</p>
								</div>
								<div className="twitter-trending-content-img"></div>
							</div>
							<div className="twitter-trending">
								<div className="twitter-trending-content">
									<p>ET Canada</p>
									<h1>New 'Obi-Wan Kenobi' trailer</h1>
									<p>5,905 Tweets</p>
								</div>
								<div className="twitter-trending-content-img"></div>
							</div>
							<a href="/">Show more</a>
						</div>
					</section>
					<section className="twitter-footer-links">
						<nav>
							<a href="/">Terms of Service</a>
							<a href="/">Privacy Policy</a>
							<a href="/">Cookie Policy</a>
							<a href="/">Accessibility</a>
							<a href="/">Ads info</a>
							<a href="/">More ...</a>
						</nav>
						<p>&copy; 2022 Twitter, Inc.</p>
					</section>
					<section>
						<div className="twitter-messages">
							<h1>Messages</h1>
							<div className="twitter-messages-icons">
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true" fill="#ffffff">
										<g>
											<path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"></path>
										</g>
									</svg>
								</div>
								<div>
									<svg viewBox="0 0 24 24" aria-hidden="true" fill="#ffffff">
										<g>
											<path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"></path>
											<path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"></path>
										</g>
									</svg>
								</div>
							</div>
						</div>
					</section>
				</article>
			</div>
		</>
	);
};

export default App;
