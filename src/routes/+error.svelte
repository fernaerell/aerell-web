<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-10 p-12.5">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-7xl font-bold">{page.status}</h1>
		<p class="text-2xl font-semibold">{page.error?.message}</p>
	</div>
	<a
		href={resolve('/')}
		class="w-full rounded-2xl bg-[#1a1a1a] px-5 py-3.75 text-center hover:cursor-pointer sm:w-50"
		>Back To Home</a
	>
</div>
