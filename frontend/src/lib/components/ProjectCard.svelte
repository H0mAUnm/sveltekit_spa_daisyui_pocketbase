<script>
  import { Icon, Pencil, ArrowTopRightOnSquare } from "svelte-hero-icons";
  import { getImageURL } from "$lib/utils";
  export let project;
</script>

<div class="card w-auto bg-base-100 shadow-xl border border-gray-200">
  <figure class="max-h-32">
    <img
      src={project?.thumbnail
        ? getImageURL(project.collectionId, project.id, project.thumbnail)
        : `https://via.placeholder.com/500/4506CB/FFFFFF/?text=${project.name}`}
      alt="project thumbnail"
    />
  </figure>
  <div class="card-body p-4">
    <h2 class="card-title">{project.name}</h2>
    <p>{project.tagline}</p>
    <div class="card-actions">
      <div class="tooltip" data-tip="Edit Project">
        <a href="/projects/{project.id}/edit" class="btn btn-square btn-sm">
          <Icon src={Pencil} class="w-4 h-4" />
        </a>
      </div>
      <div class="tooltip" data-tip="View Project">
        <a href="/projects/{project.id}" class="btn btn-square btn-sm">
          <Icon src={ArrowTopRightOnSquare} class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</div>
