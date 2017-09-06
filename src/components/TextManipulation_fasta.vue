<template>
	<div class="result_box">
		Hello from FASTA {{test}}
	</div>
</template>

<script>
	export default {
	  props: ['test'],
	};
</script>

<style scoped>
	.result_box {
		background : lightgoldenrodyellow;
		border-radius: 5px;
		height : 445px;
	}
</style>