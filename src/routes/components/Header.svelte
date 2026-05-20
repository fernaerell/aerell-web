<script lang="ts">
	import photoProfileRoundedWebp from '$lib/assets/images/photo_profile_rounded.webp';

	import githubIconWebp from '$lib/assets/images/icons/social_media/github.webp';
	import linkedinIconWebp from '$lib/assets/images/icons/social_media/linkedin.webp';
	import xIconWebp from '$lib/assets/images/icons/social_media/x.webp';
	import tiktokIconWebp from '$lib/assets/images/icons/social_media/tiktok.webp';
	import facebookIconWebp from '$lib/assets/images/icons/social_media/facebook.webp';
	import threadsIconWebp from '$lib/assets/images/icons/social_media/threads.webp';
	import instagramIconWebp from '$lib/assets/images/icons/social_media/instagram.webp';
	import youtubeIconWebp from '$lib/assets/images/icons/social_media/youtube.webp';
	import gmailIconWebp from '$lib/assets/images/icons/social_media/gmail.webp';
	import discordIconWebp from '$lib/assets/images/icons/social_media/discord.webp';
	import discordServerIconWebp from '$lib/assets/images/icons/discord_server/leva_world.webp';

	import { onMount } from 'svelte';
	import Typed, { type TypedOptions } from 'typed.js';

	import type Link from '../lib/Link';

	const professions: string[] = ['Digital Creator', 'Freelancer', 'Software Engineer'];

	const links: Link[] = [
		{
			title: 'Github',
			href: 'https://github.com/fernaerell',
			img: {
				src: githubIconWebp,
				alt: 'github icon'
			}
		},
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/fernaerell',
			img: {
				src: linkedinIconWebp,
				alt: 'linkedin icon'
			}
		},
		{
			title: 'Discord Account',
			href: 'https://discord.com/users/916247044061032469',
			img: {
				src: discordIconWebp,
				alt: 'discord icon'
			}
		},
		{
			title: 'Discord Server',
			href: 'https://discord.gg/pfWTVU3j5H',
			img: {
				src: discordServerIconWebp,
				alt: 'discord server icon'
			}
		},
		{
			title: 'X',
			href: 'https://x.com/fernaerell',
			img: {
				src: xIconWebp,
				alt: 'x icon'
			}
		},
		{
			title: 'Tiktok',
			href: 'https://tiktok.com/@fernaerell',
			img: {
				src: tiktokIconWebp,
				alt: 'tiktok icon'
			}
		},
		{
			title: 'Facebook',
			href: 'https://www.facebook.com/fernaerelll',
			img: {
				src: facebookIconWebp,
				alt: 'facebook icon'
			}
		},
		{
			title: 'Threads',
			href: 'https://www.threads.com/@fernaerell',
			img: {
				src: threadsIconWebp,
				alt: 'threads icon'
			}
		},
		{
			title: 'Instagram',
			href: 'https://instagram.com/fernaerell',
			img: {
				src: instagramIconWebp,
				alt: 'instagram icon'
			}
		},
		{
			title: 'Youtube',
			href: 'https://www.youtube.com/@fernaerell',
			img: {
				src: youtubeIconWebp,
				alt: 'youtube icon'
			}
		},
		{
			title: 'Gmail',
			href: 'mailto:fernaerell2020@gmail.com',
			img: {
				src: gmailIconWebp,
				alt: 'gmail icon'
			}
		}
	];

	let typedStringsElement: HTMLElement;
	let typedCursorElement: HTMLElement;

	onMount(() => {
		const typedOptions: TypedOptions = {
			stringsElement: typedStringsElement,
			typeSpeed: 80,
			backSpeed: 40,
			backDelay: 1500,
			startDelay: 300,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: '|'
		};

		const typed = new Typed(typedCursorElement, typedOptions);

		return () => {
			typed.destroy();
		};
	});
</script>

<header class="flex h-screen flex-col items-center justify-center gap-6.75 px-7.5 sm:p-0">
	<img
		src={photoProfileRoundedWebp}
		alt="Fern Aerell"
		width="150"
		height="150"
		loading="eager"
		class="rounded-full"
	/>
	<div class="flex flex-col items-center justify-center gap-2.5">
		<h1 class="text-center text-[2rem] font-bold">Fern Aerell</h1>
		<h2 class="text-center text-[1.5rem] opacity-90">
			<div bind:this={typedStringsElement}>
				{#each professions as profession, index (index)}
					<span>{profession}</span>
				{/each}
			</div>
			<span bind:this={typedCursorElement}></span>
		</h2>
		<div class="my-1.25 h-px w-17.5 bg-white opacity-30"></div>
		<p class="max-w-100 text-center text-[1rem] opacity-80">
			I build tools and mods people actually use, from Minecraft to real‑world apps
		</p>
	</div>
	<div class="flex flex-row flex-wrap items-center justify-center gap-7.5 p-2.5">
		{#each links as link, index (index)}
			<a
				title={link.title}
				href={link.href}
				rel="nofollow noopener external"
				target="_blank"
				class="transition-transform hover:scale-110"
			>
				<img src={link.img.src} alt={link.img.alt} width="32" height="32" />
			</a>
		{/each}
	</div>
	<br />
	<div class="inset-x-0 bottom-8 flex animate-bounce flex-col items-center">
		<span class="mb-2 text-center text-sm text-gray-400">Scroll to explore</span><svg
			class="h-6 w-6 text-gray-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path></svg
		>
	</div>
</header>
