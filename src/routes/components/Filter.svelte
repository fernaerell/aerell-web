<script lang="ts">
	interface Props {
		tags: string[];
		value: string;
	}

	let { value = $bindable(), ...props }: Props = $props();
</script>

<div class="rounded-2xl bg-[#1a1a1a] p-2.5">
	<select class="pr-1 focus:outline-none" name="tag" id="tag" bind:value>
		{#each props.tags as tag, index (index)}
			<option value={tag} selected={index == 0}>{tag}</option>
		{/each}
	</select>
</div>
