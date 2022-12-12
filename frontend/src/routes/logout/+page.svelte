<script>
  import { goto } from "$app/navigation";
  import { pb, User } from "$lib/stores.js";
  import { beforeUpdate } from "svelte";

  beforeUpdate(async () => {
    signout();
  });

  async function signout() {
    pb.authStore.clear();
    User.set(undefined);
    goto("/login");
  }
</script>
