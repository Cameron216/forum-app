import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Footer',
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<any> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
