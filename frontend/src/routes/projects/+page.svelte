<script>
  import { ProjectCard } from "$lib/components";
  import { pb } from "$lib/stores.js";
  import { onMount } from "svelte";

  let page = 1,
    totalPages = 1;
  let projects = [];

  onMount(async () => {
    getProjects();
  });

  const getProjects = async () => {
    try {
      // projects = structuredClone(
      //   await pb.collection("projects").getFullList(undefined)
      // );
      const pageData = structuredClone(
        await pb.collection("projects").getList(page, 6)
      );
      projects = pageData.items;
      totalPages = pageData.totalPages;
    } catch (err) {
      console.log(err.status, err.data);
    }
  };
</script>

<div class="flex flex-col gap-3">
  <h1 class="text-xl font-bold">Recent Projects</h1>
  <div class="grid grid-cols-4 gap-4">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="btn-group place-self-center mt-10">
    <button
      class="btn"
      on:click={() => {
        if (page > 1) {
          page -= 1;
          getProjects();
        }
      }}>«</button
    >
    <button class="btn">Page {page}</button>
    <button
      class="btn"
      on:click={() => {
        if (page < totalPages) {
          page += 1;
          getProjects();
        }
      }}>»</button
    >
  </div>
</div>
