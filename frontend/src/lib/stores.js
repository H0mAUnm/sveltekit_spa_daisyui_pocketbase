import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

import { writable } from "svelte/store";
export const User = writable({});
