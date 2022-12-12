<script>
  export let data;
  import { pb } from "$lib/stores.js";
  import { getImageURL } from "$lib/utils";
  import { onMount } from "svelte";

  let project;

  onMount(async () => {
    getProject(data.projectId);
  });

  const getProject = async (id) => {
    try {
      project = structuredClone(await pb.collection("projects").getOne(id));
    } catch (err) {
      console.log(err.status, err.data);
    }
  };
</script>

{#if project?.id != undefined}
  <div class="flex flex-col w-full mt-4">
    <div class="avatar">
      <div class="w-20 rounded">
        <img
          src={project?.thumbnail
            ? getImageURL(
                project.collectionId,
                project.id,
                project.thumbnail,
                "80x80"
              )
            : ""}
          alt="project thumbnail"
        />
      </div>
    </div>
    <h1 class="text-2xl font-bold mt-4">
      {project.name}
    </h1>
    <p class="text-2xl font-light mt-2">{project.tagline}</p>
    <p>{project.description}</p>
  </div>
{/if}
