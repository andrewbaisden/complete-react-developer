import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	it('has a following text label', () => {
		render(<App />);
		const el = screen.getByText(/Following/i);

		expect(el).toBeTruthy();
	});
	it('has a followers text label', () => {
		render(<App />);
		const el = screen.getByText(/Followers/i);

		expect(el).toBeTruthy();
	});
	it('has a you might like heading', () => {
		render(<App />);
		const el = screen.getByText(/You might like/i);

		expect(el.innerHTML).toBe('You might like');
	});
	it('has a whats happening heading', () => {
		render(<App />);
		const el = screen.getByText(/Whats happening/i);

		expect(el.innerHTML).toBe('Whats happening');
	});
});
