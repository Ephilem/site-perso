import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
   
   return {
        url: event.url.pathname,
   };
};