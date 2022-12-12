<script>
  import { Icon, Pencil } from "svelte-hero-icons";
  import { Input } from "$lib/components";
  import { getImageURL } from "$lib/utils";
  import { pb, User } from "$lib/stores.js";
  import dummyAvatar from "$lib/images/dummyAvatar.svg";

  import { validateData } from "$lib/utils";
  import { updateProfileSchema } from "$lib/schemas";
  import { serialize } from "object-to-formdata";
  let errors;

  let loading = false;

  async function onSubmit(e) {
    let body = new FormData(e.target);

    const userAvatar = body.get("avatar");
    if (userAvatar.size === 0) {
      body.delete("avatar");
    }

    const { formData, err } = await validateData(body, updateProfileSchema);
    errors = err?.fieldErrors;
    if (err) return;

    loading = true;
    try {
      const { name, avatar } = await pb
        .collection("users")
        .update($User?.id, serialize(formData));
      $User.name = name;
      $User.avatar = avatar;
    } catch (err) {
      console.log(err.status, err.data);
    }
    loading = false;
  }

  const showPreview = (event) => {
    const target = event.target;
    const files = target.files;

    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      const preview = document.getElementById("avatar-preview");
      preview.src = src;
    }
  };
</script>

<div class="flex flex-col w-full h-full">
  <form
    class="flex flex-col space-y-2 w-full"
    enctype="multipart/form-data"
    on:submit|preventDefault={onSubmit}
  >
    <h3 class="text-2xl font-medium">Update Profile</h3>
    <div class="form-control w-full max-w-lg">
      <label for="avatar" class="label font-medium pb-1">
        <span class="label-text">Profile Picture</span>
      </label>
      <label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
        <label
          for="avatar"
          class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer"
        >
          <span class="btn btn-circle btn-sm btn-secondary">
            <Icon src={Pencil} class="w-4 h-4" />
          </span>
        </label>
        <div class="w-32 rounded-full">
          <img
            src={$User?.avatar
              ? getImageURL($User?.collectionId, $User?.id, $User?.avatar)
              : dummyAvatar}
            alt="user avatar"
            id="avatar-preview"
          />
        </div>
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        value=""
        accept="image/*"
        hidden
        on:change={showPreview}
        disabled={loading}
      />
    </div>
    {#if errors?.avatar}
      {#each errors?.avatar as error}
        <label for="avatar" class="label py-0 pt-1">
          <span class="label-text-alt text-error">
            {error}
          </span>
        </label>
      {/each}
    {/if}

    <Input
      id="name"
      label="Name"
      value={$User?.name}
      disabled={loading}
      errors={errors?.name}
    />
    <div class="w-full max-w-lg pt-3">
      <button
        class="btn btn-primary w-full max-w-lg"
        type="submit"
        disabled={loading}
      >
        Update Profile
      </button>
    </div>
  </form>
</div>
