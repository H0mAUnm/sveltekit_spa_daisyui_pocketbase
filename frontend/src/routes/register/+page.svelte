<script>
  import { Input } from "$lib/components";

  import { goto } from "$app/navigation";
  import { pb, User } from "$lib/stores.js";
  import { generateUsername } from "$lib/utils";

  import { validateData } from "$lib/utils";
  import { registerUserSchema } from "$lib/schemas";
  let errors, invalidData;

  async function onSubmit(e) {
    const { formData, err } = await validateData(
      new FormData(e.target),
      registerUserSchema
    );
    errors = err?.fieldErrors;
    if (err) {
      invalidData = formData;
      return;
    }

    let username = generateUsername(
      formData.name.split(" ").join("")
    ).toLowerCase();

    try {
      await pb.collection("users").create({ username, ...formData });

      await pb.collection("users").requestVerification(formData.email);
      pb.authStore.clear();
      User.set(undefined);
      goto("/login");
    } catch (err) {
      console.log(err.status, err.data);
    }
  }
</script>

<div class="flex flex-col items-center h-full w-full">
  <h2
    class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content"
  >
    Register for an account
  </h2>
  <p class="text-center mt-1">
    Or <a
      href="/login"
      class="text-primary font-medium hover:cursor-pointer hover:underline"
      >sign in</a
    > if you already have an account.
  </p>
  <form
    class="flex flex-col items-center space-y-2 w-full pt-4"
    on:submit|preventDefault={onSubmit}
  >
    <Input
      id="name"
      label="Name"
      value={invalidData?.name}
      errors={errors?.name}
    />
    <Input
      type="email"
      id="email"
      label="Email"
      value={invalidData?.email}
      errors={errors?.email}
    />
    <Input
      type="password"
      id="password"
      label="Password"
      errors={errors?.password}
    />
    <Input
      type="password"
      id="passwordConfirm"
      label="Confirm Password"
      errors={errors?.passwordConfirm}
    />
    <div class="w-full max-w-lg pt-2">
      <button type="submit" class="btn btn-primary w-full">Register</button>
    </div>
  </form>
</div>
