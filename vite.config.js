import { sveltekit } from '@sveltejs/kit/vite';
import unocss from 'unocss/vite';

const config = {
	plugins: [sveltekit(), unocss()]
};

export default config;
