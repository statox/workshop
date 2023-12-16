import { redirect } from '@sveltejs/kit';
import { PUBLIC_BLOG_URL } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    const redirectUrl = PUBLIC_BLOG_URL + '/posts/' + params.path;

    throw redirect(308, redirectUrl);
};
