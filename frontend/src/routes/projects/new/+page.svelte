<script>
  import { pb, User } from "$lib/stores.js";
  import { goto } from "$app/navigation";
  import { Input, TextArea } from "$lib/components";
  import { onMount } from "svelte";

  import { validateData } from "$lib/utils";
  import { createProjectSchema } from "$lib/schemas";
  import { serialize } from "object-to-formdata";
  let errors, invalidData;

  onMount(async () => {
    if (!pb.authStore.isValid) {
      goto(`/login`);
    }
  });

  async function onSubmit(e) {
    let body = new FormData(e.target);

    const thumbnail = body.get("thumbnail");
    if (thumbnail.size === 0) {
      body.delete("thumbnail");
    }
    body.append("user", $User.id);

    const { formData, err } = await validateData(body, createProjectSchema);
    errors = err?.fieldErrors;
    if (err) return;

    try {
      await pb.collection("projects").create(serialize(formData));
    } catch (err) {
      console.log(err.status, err.data);
    }

    goto(`/my/projects`);
  }
</script>

<div class="flex flex-col w-full h-full p-2">
  <div class="w-full">
    <form
      class="flex flex-col space-y-2 w-full items-center"
      enctype="multipart/form-data"
      on:submit|preventDefault={onSubmit}
    >
      <h3 class="text-3xl font-bold">Tell us more about this project</h3>
      <p class="mt-2 text-lg">
        We'll need the name, tagline, link, and description
      </p>

      <Input
        id="name"
        label="Project name"
        value={invalidData?.name}
        errors={errors?.name}
      />
      <Input
        id="tagline"
        label="Project tagline"
        value={invalidData?.tagline}
        errors={errors?.tagline}
      />
      <Input
        id="url"
        label="Project URL"
        value={invalidData?.url}
        errors={errors?.url}
      />
      <TextArea
        id="description"
        label="Project description"
        value={invalidData?.description}
        errors={errors?.description}
      />
      <Input
        id="thumbnail"
        label="Thumbnail"
        type="file"
        errors={errors?.thumbnail}
      />

      <div class="w-full max-w-lg pt-3">
        <button type="submit" class="btn btn-primary w-full max-w-lg"
          >Create Project</button
        >
      </div>
    </form>
  </div>
</div>
