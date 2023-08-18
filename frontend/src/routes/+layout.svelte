<script>
  import "../app.postcss";
  import dummyAvatar from "$lib/images/dummyAvatar.svg";
  import { getImageURL } from "$lib/utils";
  import { pb, User } from "$lib/stores.js";
  import { onMount } from "svelte";
  import { Toaster } from "svelte-french-toast";

  onMount(async () => {
    try {
      if (pb.authStore.isValid) {
        await pb.collection("users").authRefresh();
        User.set(structuredClone(pb.authStore.model));
      } else {
        pb.authStore.clear();
        User.set(undefined);
      }
    } catch (_) {
      pb.authStore.clear();
      User.set(undefined);
    }
  });
</script>

<Toaster />
<div class="min-h-full">
  <nav class="navbar bg-base-100 border-b">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
      <a href="/projects" class="btn btn-ghost normal-case text-xl"
        >Explore Projects</a
      >
    </div>

    <div class="flex-none">
      {#if !$User}
        <div class="dropdown dropdown-end">
          <a href="/login" class="btn btn-primary">Login</a>
          <a href="/register" class="btn btn-secondary">Register</a>
        </div>
      {:else}
        <div class="dropdown dropdown-end mr-4">
          <a href="/projects/new" class="btn btn-primary btn-outline"
            >Add Project</a
          >
        </div>
        <div class="dropdown dropdown-end">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                src={$User?.avatar
                  ? getImageURL($User?.collectionId, $User?.id, $User?.avatar)
                  : dummyAvatar}
                alt="User avatar"
              />
            </div>
          </label>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/my/projects" class="justify-between">My Projects</a>
            </li>
            <li><a href="/my/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>
  <div class="py-4">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</div>
