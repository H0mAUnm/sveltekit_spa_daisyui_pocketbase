<script>
  import { goto } from "$app/navigation";
  import { pb, User } from "$lib/stores.js";

  import { validateData } from "$lib/utils";
  import { loginUserSchema } from "$lib/schemas";
  import toast from "svelte-french-toast";

  let notVerified = false;
  let loading = false;

  async function onSubmit(e) {
    const { formData, err } = await validateData(
      new FormData(e.target),
      loginUserSchema
    );

    if (err) {
      toast.error("Invalid credentials", {
        position: "bottom-center",
      });
      return;
    }

    loading = true;
    try {
      await pb
        .collection("users")
        .authWithPassword(formData.email, formData.password);
      if (!pb?.authStore?.model?.verified) {
        pb.authStore.clear();
        console.log("Email not verified!");
        notVerified = true;
      } else {
        User.set(pb.authStore.model);
        goto("/");
      }
    } catch (err) {
      toast.error(err.data.message, {
        position: "bottom-center",
      });
      console.log(err.status, err.data);
    }
    loading = false;
  }
</script>

<div class="flex flex-col items-center h-full w-full">
  <h2
    class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content"
  >
    Login to your account
  </h2>
  <p class="text-center mt-1">
    Or <a
      href="/register"
      class="text-primary font-medium hover:cursor-pointer hover:underline"
      >register</a
    > if you don't already have an account.
  </p>
  <form
    class="flex flex-col items-center space-y-2 w-full pt-4"
    on:submit|preventDefault={onSubmit}
  >
    <div class="form-control w-full max-w-md">
      <label for="email" class="label font-medium pb-1">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        name="email"
        class="input input-bordered w-full max-w-md"
      />
    </div>
    <div class="form-control w-full max-w-md">
      <label for="password" class="label font-medium pb-1">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        name="password"
        class="input input-bordered w-full max-w-md"
      />
    </div>
    <div class="w-full max-w-md">
      <a
        href="/reset-password"
        class="font-medium text-primary hover:cursor-pointer hover:underline"
      >
        Forgot Password?</a
      >
    </div>

    <div class="w-full max-w-md pt-2">
      <button type="submit" class="btn btn-primary w-full" disabled={loading}
        >Login</button
      >
    </div>
    {#if notVerified}
      <div class="alert alert-error shadow-lg w-full max-w-md">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >
          <span>You must verify your email before you can login.</span>
        </div>
      </div>
    {/if}
  </form>
</div>
