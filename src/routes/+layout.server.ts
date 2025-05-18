import type {LayoutServerLoad} from './$types';
import {db} from "$lib/server/db";
import {compile} from "svelte/compiler";

//export const csr = false;

export const load: LayoutServerLoad = async (event) => {
    return {
        user: event.locals.user,
    };
};