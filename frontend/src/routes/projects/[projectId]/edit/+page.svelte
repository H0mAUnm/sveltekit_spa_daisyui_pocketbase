<script>
  import { pb, User } from "$lib/stores.js";
  import { goto } from "$app/navigation";
  import { Icon, Trash } from "svelte-hero-icons";
  import { Input, TextArea } from "$lib/components";
  import { getImageURL } from "$lib/utils";
  import dummyThumbnail from "$lib/images/dummyThumbnail.svg";

  import { validateData } from "$lib/utils";
  import { updateProjectSchema } from "$lib/schemas";
  import { serialize } from "object-to-formdata";
  import toast from "svelte-french-toast";
  let errors, invalidData;

  export let data;
  let project;
  $: $User.id, $User.id ? getProject() : {};

  let thumbnail;
  let loading = false;

  const getProject = async () => {
    try {
      const _project = structuredClone(
        await pb.collection("projects").getOne(data.projectId)
      );
      if ($User.id == _project.user) {
        project = _project;

        if (project.thumbnail)
          thumbnail = getImageURL(
            project.collectionId,
            project.id,
            project.thumbnail,
            "80x80"
          );
        else {
          thumbnail = dummyThumbnail;
        }
      } else {
        toast.error("You may fork this project!", {
          position: "bottom-center",
          style: " padding: 16px; color: white; background-color: coral;",
        });
      }
    } catch (err) {
      console.log(err.status, err.data);
    }
  };

  async function onSubmit(e) {
    let body = new FormData(e.target);

    if (thumbnail == dummyThumbnail) {
      formData.set("thumbnail", null);
    }

    const { formData, err } = await validateData(body, updateProjectSchema);
    errors = err?.fieldErrors;
    if (err) return;

    loading = true;
    try {
      await pb
        .collection("projects")
        .update(data.projectId, serialize(formData));
    } catch (err) {
      console.log(err.status, err.data);
    }
    loading = false;
    goto(`/my/projects/`);
  }

  const changeThumbnail = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const src = URL.createObjectURL(files[0]);
      thumbnail = src;
    }
  };

  async function deleteThumbnail(e) {
    thumbnail = dummyThumbnail;
  }
</script>

{#if project?.id != undefined}
  <div class="flex flex-col w-full h-full p-2">
    <div class="w-full">
      <form
        class="flex flex-col space-y-2 w-full items-center"
        enctype="multipart/form-data"
        on:submit|preventDefault={onSubmit}
      >
        <input
          type="file"
          name="thumbnail"
          id="thumbnail"
          class="file-input file-input-bordered w-full max-w-lg mt-2"
          hidden
          on:change={changeThumbnail}
        />
        <label for="thumbnail" class="avatar w-20 hover:cursor-pointer ">
          <label
            for="thumbnail"
            class="absolute -top-3 -right-4 hover:cursor-pointer"
          >
            {#if thumbnail != dummyThumbnail}
              <button
                on:click|preventDefault={deleteThumbnail}
                class="btn btn-error btn-sm btn-circle"
              >
                <Icon src={Trash} class="w-5 h-5 text-white" />
              </button>
            {/if}
          </label>
          <div class="w-20 rounded">
            <img
              id="thumbnail-preview"
              src={thumbnail}
              alt="project thumbnail"
            />
          </div>
        </label>
        {#if errors?.thumbnail}
          {#each errors?.thumbnail as error}
            <label for="thumbnail" class="label py-0 pt-1">
              <span class="label-text-alt text-error">
                {error}
              </span>
            </label>
          {/each}
        {/if}

        <h3 class="text-3xl font-bold">{project.name}</h3>

        <Input
          id="name"
          label="Project name"
          value={invalidData?.name ?? project.name}
          errors={errors?.name}
        />
        <Input
          id="tagline"
          label="Project tagline"
          value={invalidData?.tagline ?? project.tagline}
          errors={errors?.tagline}
        />
        <Input
          id="url"
          label="Project URL"
          value={invalidData?.url ?? project.url}
          errors={errors?.url}
        />
        <TextArea
          id="description"
          label="Project description"
          value={invalidData?.description ?? project.description}
          errors={errors?.description}
        />

        <div class="w-full max-w-lg pt-3">
          <button type="submit" class="btn btn-primary w-full max-w-lg"
            >Save Changes</button
          >
        </div>
      </form>
    </div>
  </div>
{:else}
  Editing Forbidden! or Project Not found!
{/if}
