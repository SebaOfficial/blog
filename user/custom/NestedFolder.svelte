<script lang="ts">
  import FolderElement from '$lib/components/folder.svelte';
  import type { Folder } from '$lib/types/folder';

  export let folderData: Folder.Item;
</script>

<div class="nested-folder">
  <FolderElement expanded={true} name={folderData.name} files={folderData.files} />
</div>

<style>
  .nested-folder {
    padding-left: 20px;
  }
</style>
