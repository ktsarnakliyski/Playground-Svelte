import { API_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`${API_URL}/ping`);
	const responseAsJson = await res.json();

	return { message: responseAsJson.message };
}) satisfies PageServerLoad;
