<script lang="ts">
	import Header from './components/Header.svelte';
	import Portfolio from './components/Portfolio.svelte';
	import Footer from './components/Footer.svelte';
</script>

<Header />
<Portfolio show_search_and_filter={false} show_more_button={true} max={5} />
<Footer />
