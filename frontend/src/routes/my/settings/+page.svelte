<script>
  import { pb, User } from "$lib/stores.js";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  onMount(async () => {
    if (!pb.authStore.isValid) {
      goto("/login");
    } else {
      goto("/my/settings/profile");
    }
  });
</script>
