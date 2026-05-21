<script lang="ts">
	import Search from './Search.svelte';
	import Filter from './Filter.svelte';

	import { getTagsFromPortfolio, getTagsFromPortfolios, portfolios } from '../lib/Portfolio';
	import { resolve } from '$app/paths';

	interface Props {
		prefix_title?: string;
		show_more_button: boolean;
		show_search_and_filter: boolean;
		max?: number;
	}

	const props: Props = $props();

	const tags: string[] = [];
	const TAG_ALL = 'All';

	tags.push(TAG_ALL);
	tags.push(...getTagsFromPortfolios(portfolios));

	let tag: string = $state(TAG_ALL);
</script>

<div class="flex flex-col items-center gap-12.5 p-12.5">
	<h1 id="portfolio" class="text-center text-3xl font-bold">
		{props.prefix_title ?? ''} Portfolio
	</h1>
	<div class="flex h-full w-full flex-1 flex-col items-center gap-5">
		{#if props.show_search_and_filter}
			<div class="flex w-full flex-row items-center gap-2.5">
				<Filter {tags} bind:value={tag} />
				<Search />
			</div>
		{/if}
		{#if portfolios.length > 0}
			<div
				class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			>
				{#each (props.max ? portfolios.slice(0, props.max) : portfolios).filter( (p) => (tag == TAG_ALL ? true : p.games?.includes(tag) || p.types?.includes(tag)) ) as portfolio, index (index)}
					<a
						href={portfolio.id ? `/portfolio/${portfolio.id}` : portfolio.href}
						rel="external"
						target="_blank"
						class="group flex flex-col overflow-hidden rounded-2xl bg-[#1a1a1a] transition-transform duration-300 hover:border hover:border-white"
					>
						<div class="aspect-video overflow-hidden">
							<img
								src={portfolio.img.src}
								alt={portfolio.img.alt}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<div class="flex flex-col gap-4 p-5">
							<h3 class="truncate text-lg font-bold">{portfolio.title}</h3>
							<p class="whitespace-pre-wrap opacity-95">
								{portfolio.short_description ?? 'No description.'}
							</p>
							<div class="flex flex-row flex-wrap gap-1.5">
								{#each getTagsFromPortfolio(portfolio) as tag, index (index)}
									<span class="rounded-md border border-[#ffffff48] px-2.5 py-1 text-xs font-medium"
										>{tag}</span
									>
								{/each}
							</div>
						</div>
					</a>
				{/each}
			</div>
			{#if props.show_more_button}
				<a
					href={resolve('/portfolio')}
					class="w-full rounded-2xl bg-[#1a1a1a] px-5 py-3.75 text-center hover:cursor-pointer sm:w-50"
					>Show More</a
				>
			{/if}
		{:else}
			<p class="opacity-50">No portfolio yet.</p>
		{/if}
	</div>
</div>
