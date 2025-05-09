import { redirect } from '@sveltejs/kit';
import type { LayoutServerData } from './$types';

export const load: LayoutServerData = async (event) => {
    
    if (!event.locals.user) {
        return redirect(302, '/login');
    }

    return { user: event.locals.user };
};

