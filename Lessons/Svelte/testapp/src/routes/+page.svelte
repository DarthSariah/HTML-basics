<script>
	let text = '';
</script>

<h1>Insert text</h1>

<input type="text" bind:value={text} />

<div>
	{text.toUpperCase()}
</div>

<style>
	div {
		margin-top: 15px;
	}
</style>
