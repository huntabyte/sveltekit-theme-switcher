import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import {dev} from "$app/environment";

export const actions: Actions = {
    setTheme: async ({ url, cookies }) => {
        const theme = url.searchParams.get("theme");
        const redirectTo = url.searchParams.get("redirectTo");
        if (theme) {
            await cookies.set("colortheme", theme, {
                path: "/",
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 365,
                secure: !dev
            });
        }
        throw redirect(303, redirectTo ?? "/");
    },
};
