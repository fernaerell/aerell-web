<script lang="ts">
	import SearchSvg from './SearchSvg.svelte';

	interface Props {
		value: string;
	}

	let { value = $bindable() }: Props = $props();
</script>

<div class="flex w-full flex-row items-center gap-2.5 rounded-2xl bg-[#1a1a1a] p-2.5">
	<SearchSvg class="h-3.75 w-3.75 text-[white]" />
	<input
		class="w-full text-[white] focus:outline-none"
		type="text"
		name="search"
		id="search"
		placeholder="Search..."
		bind:value
	/>
</div>
