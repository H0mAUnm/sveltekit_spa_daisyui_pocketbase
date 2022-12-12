<script>
  import { pb, User } from "$lib/stores.js";
  import { Input, Modal } from "$lib/components";

  import { validateData } from "$lib/utils";
  import { updateEmailSchema, updateUsernameSchema } from "$lib/schemas";
  let errors;

  let emailModalOpen = false;
  let usernameModalOpen = false;
  let loading = false;

  async function onSubmitEmail(e) {
    const { formData, err } = await validateData(
      new FormData(e.target),
      updateEmailSchema
    );
    errors = err?.fieldErrors;
    if (err) return;

    loading = true;
    emailModalOpen = true;
    try {
      const { email } = await pb
        .collection("users")
        .requestEmailChange(formData.email); // Fails to request email change -> try mailtrap.io and enabling the SMTP settings from the Admin UI
      $User.email = email;
      emailModalOpen = false;
    } catch (err) {
      console.log(err.status, err.data);
    }
    loading = false;
  }

  async function onSubmitUsername(e) {
    const { formData, err } = await validateData(
      new FormData(e.target),
      updateUsernameSchema
    );
    errors = err?.fieldErrors;
    if (err) return;

    loading = true;
    usernameModalOpen = true;

    // try {
    //   const record = await pb
    //     .collection("users")
    //     .getFirstListItem(`username = "${formData.username}"`); // Needs users API Rules "List/Search action-Custom rule" access to search all Users!
    //   console.log(record);
    //   console.log("This username has already been taken!");
    // } catch (err) {
    //   console.log(err.status, err.data);
    //   if (err.status == 404) {
    //     console.log("This username is free!");
    //   }
    // }

    try {
      const { username } = await pb
        .collection("users")
        .update($User.id, { username: formData.username });
      $User.username = username;
    } catch (err) {
      console.log("This username has already been taken! Try another.");
      console.log(err.status, err.data);
    }
    loading = false;
    usernameModalOpen = false;
  }
</script>

<div class="flex flex-col w-full h-full space-y-12">
  <div class="w-full">
    <h3 class="text-2xl font-medium">Change Email</h3>
    <div class="divider" />
    <Modal label="change-email" checked={emailModalOpen}>
      <span slot="trigger" class="btn btn-primary">Change Email</span>
      <h3 slot="heading">Change Your Email</h3>
      <form class="space-y-2" on:submit|preventDefault={onSubmitEmail}>
        <Input
          id="email"
          type="email"
          label="Enter your new email address"
          required={true}
          value={$User?.email}
          disabled={loading}
          errors={errors?.email}
        />
        <button type="submit" class="btn btn-primary w-full" disabled={loading}
          >Change my email</button
        >
      </form>
    </Modal>
  </div>
  <div class="w-full">
    <h3 class="text-2xl font-medium">Change Username</h3>
    <div class="divider mb-0.5" />
    <Input id="username" label="Username" value={$User?.username} disabled />
    <Modal label="change-username" checked={usernameModalOpen}>
      <span slot="trigger" class="btn btn-primary">Change Username</span>
      <h3 slot="heading">Change Your Username</h3>
      <form class="space-y-2" on:submit|preventDefault={onSubmitUsername}>
        <Input
          id="username"
          type="text"
          label="Enter your new username"
          required={true}
          value={$User?.username}
          disabled={loading}
          errors={errors?.username}
        />
        <button type="submit" class="btn btn-primary w-full" disabled={loading}
          >Change my username</button
        >
      </form>
    </Modal>
  </div>
</div>
