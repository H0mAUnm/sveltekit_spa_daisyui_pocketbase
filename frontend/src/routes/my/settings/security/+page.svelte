<script>
  import { Input } from "$lib/components";
  import { goto } from "$app/navigation";
  import { pb, User } from "$lib/stores.js";

  import { validateData } from "$lib/utils";
  import { updatePasswordSchema } from "$lib/schemas";
  let errors;

  async function onSubmit(e) {
    const { formData, err } = await validateData(
      new FormData(e.target),
      updatePasswordSchema
    );
    errors = err?.fieldErrors;
    if (err) return;

    try {
      await pb.collection("users").update($User.id, formData);
      pb.authStore.clear();
    } catch {
      console.log(err.status, err.data);
    }
    goto("/login");
  }
</script>

<div class="flex flex-col w-full h-full">
  <div class="w-full">
    <form
      class="flex flex-col space-y-2 w-full"
      on:submit|preventDefault={onSubmit}
    >
      <h3 class="text-2xl font-medium">Change Password</h3>
      <div class="divider" />
      <Input
        id="oldPassword"
        label="Old Password"
        type="password"
        required
        errors={errors?.oldPassword}
      />
      <Input
        id="password"
        label="New Password"
        type="password"
        required
        errors={errors?.password}
      />
      <Input
        id="passwordConfirm"
        label="Confirm New Password"
        type="password"
        required
        errors={errors?.passwordConfirm}
      />
      <a
        href="/reset-password"
        class="text-primary hover:cursor-point hover:underline"
      >
        I forgot my password</a
      >
      <div class="w-full max-w-lg pt-3">
        <button type="submit" class="btn btn-primary w-full max-w-lg">
          Update Password
        </button>
      </div>
    </form>
  </div>
</div>
