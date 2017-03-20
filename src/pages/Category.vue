<template>
	<div class="mr-root">
		<public-header>
			<p class="title">全部分类</p>
		</public-header>
		<div class="mr-content">
			<ul>
				<li is="game-list" v-for="(g,index) in gameList" :game='g' :key=index></li>
			</ul>
			<loading v-if="showLoading"></loading>
		</div>
	</div>
</template>
<script>
	import Public  from '../public.js'
	import GameList from '../components/GameList'
	export default{
		data(){
			return{
				gameList:[],
				showLoading:true
			}
		},
		mixins:[Public],
		components:{
			GameList
		},
		created(){
			var _this = this;
			this.axios.get('/douyuapi/RoomApi/game')
				.then(function(data){
					_this.gameList = data.data.data
					setTimeout(function(){
						_this.showLoading = false
					},1000)
				})
				.catch(function(err){
					console.log(err)
				})
		}
	}
</script>
<style>
	 .mr-content{
    padding:44px 0 0 0;
  }
  .mr-content ul{
    display:flex;
    flex-wrap:wrap;
  }
</style>