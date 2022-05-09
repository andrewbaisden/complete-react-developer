import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TwitterMenu } from './TwitterMenu';

export default {
	title: 'Twitter/Compose Tweet',
	component: TwitterMenu,
} as ComponentMeta<typeof TwitterMenu>;

const Template: ComponentStory<typeof TwitterMenu> = (args) => <TwitterMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	home: 'Home',
	explore: 'Explore',
	notifications: 'Notifications',
	messages: 'Messages',
	bookmarks: 'Bookmarks',
	lists: 'Lists',
	profile: 'Profile',
	more: 'More',
};
