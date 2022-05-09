import { render, screen } from '@testing-library/react';

import TwitterMenu from './TwitterMenu';

describe('<TwitterMenu />', () => {
	it('has a name called home', () => {
		render(
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
		);
		const el = screen.getByTestId('home');

		expect(el.innerHTML).toBe('Home');
	});
	it('has a name called explore', () => {
		render(
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
		);
		const el = screen.getByTestId('explore');

		expect(el.innerHTML).toBe('Explore');
	});
	it('has a name called notifications', () => {
		render(
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
		);
		const el = screen.getByTestId('notifications');

		expect(el.innerHTML).toBe('Notifications');
	});
	it('has a name name called messages', () => {
		render(
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
		);
		const el = screen.getByTestId('messages');

		expect(el.innerHTML).toBe('Messages');
	});
	it('has a name called bookmarks', () => {
		render(
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
		);
		const el = screen.getByTestId('bookmarks');

		expect(el.innerHTML).toBe('Bookmarks');
	});
	it('has a name name called lists', () => {
		render(
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
		);
		const el = screen.getByTestId('lists');

		expect(el.innerHTML).toBe('Lists');
	});
	it('has a name called profile', () => {
		render(
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
		);
		const el = screen.getByTestId('profile');

		expect(el.innerHTML).toBe('Profile');
	});
	it('has a name called more', () => {
		render(
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
		);
		const el = screen.getByTestId('more');

		expect(el.innerHTML).toBe('More');
	});
});
