
<svelte:head>
	<title>Bingo</title>
</svelte:head>

<div class="container">
	<header class="header">
		<h1>Bingo!</h1>
	</header>
	<main class="main">
		<BingoGrid />
	</main>
</div>

<script>
	import BingoGrid from '../components/bingo-grid.svelte'
</script>

<style>
	.container {
		display: grid;
		height: 100vh;
		grid-template-rows: auto 1fr auto;
	}

	.header{
		padding: 2rem;
	}

	.main {
		padding: 2rem;
	}


	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
