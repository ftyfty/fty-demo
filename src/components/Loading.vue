<template>
	<div class="loading">
		<img src="../assets/images/0.gif"/>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.loading{
    height:100%;
    position:fixed;
    z-index:10;
    width:100%;
    background:#062734;
    opacity:.4;
  }
  .loading img{
    width:100%;
    height:auto;
    position: absolute;
    top:calc(50% - 140px);
  }
</style>