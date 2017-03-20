<template>
	<div class="mr-root">
		<public-header>
			<p class="title">hello</p>
		</public-header>
		<loading v-if="showLoading"></loading>
		<div class="mr-content">
			<home-item v-for="(room,index) in roomList" :r="room" :key="index" ></home-item>
			<p v-if="errorr">不好意思,加载失败,请稍后再试...</p>
			<div class="clear"></div>
			<div class="loadMore">
           		<span @click="loadMore">点击加载更多</span>
         	</div>
		</div>
		 
	</div>
</template>
<script>
	import Public from '../public.js'
	import HomeItem from '../components/HomeItem'
	export default{
		data(){
			return {
				showLoading:true,
				roomList:[],
				errorr:false,
				count:0
			}
		},
		created(){
			this.getInfo(this.count)
		},
		mixins:[Public],
		components:{
			HomeItem
		},
		methods:{
			getInfo(page){
				var _this = this;
				this.axios.get(`/douyuapi/RoomApi/live?offset=${page}&limit=20`)
				.then(function(data){
					_this.errorr = false;
					_this.roomList = _this.roomList.concat(data.data.data);
					setTimeout(function(){
						_this.showLoading=false
					},1000)
				})
				.catch(function(err){
					_this.errorr=true;
					_this.showLoading = false
				})
			},
			loadMore(){
				this.count++,
				this.getInfo(this.count)
			}
		}
	}
</script>
<style>
 .mr-content{
    padding:44px 0 0 .4rem;
    overflow: hidden;
  }
  .loadMore{
    margin:10px;
    text-align: center;
  }
  .loadMore span{
    display: inline-block;
    line-height:30px;
    padding:0 20px;
    border-radius:10px;
    border:1px solid #000;
  }
</style>