const pocketbaseUrl = import.meta.env.VITE_POCKETBASE_URL;
import PocketBase from "pocketbase";
export const pb = new PocketBase(pocketbaseUrl);

import { writable } from "svelte/store";
export const User = writable({});
