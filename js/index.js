;
(function($,undefined) {
	Vue.filter("omit",function(value) {
		return value.length>30?(value.slice(0,30)+"..."):value;
	});
	Vue.filter("listNum",function(value,spaceStr,index){
		if(spaceStr.length === 1){
			return (index + 1) + spaceStr + value;
		}else if(spaceStr.length === 2){
			var spaceStrs = spaceStr.split("");
			return spaceStrs[0] + (index + 1) + spaceStrs[1] + value;
		}
	});
	var vm = new Vue({
		el: "#app",
		ready:function(){
			var urlStr = "data/json.json";
			var _self = this;
			var loadIndex = layer.load(3, {shade: [0.3, '#aaa']});
			$.ajax({
				url:urlStr,
				dataType:"json",
				success:function(data){
					_self.userName = data.userName;
					_self.sideInfos = data.sideInfos;
					_self.myselfs =data.myselfs;
					_self.projects = data.projects;
					_self.skills = data.skills;
					_self.suggest = data.suggest;
					_self.searchContent = data.searchContent;
					_self.suggestContent = data.suggestContent;
					layer.close(loadIndex);
				},error:function(){
					layer.close(loadIndex);
					layer.alert("加载数据失败...");
				}
			});
		},
		data: {
			userName:"",
			sideInfos:[],
			myselfs:[],
			projects:[],
			skills:[],
			suggest: false,
			searchShow:false,
			searchContent: "",
			suggestContent: []
		},
		methods:{
			search:function(){
				layer.alert("敬请期待...");

				if(this.searchContent.trim().length === 0){
					return ;
				}
				//判断是否有输入的内容
				for(var i = 0,len = this.suggestContent.length;i < len;i++){
					if(this.searchContent === this.suggestContent[i]){
						return;
					}
				}
				if(this.suggestContent.length > 5){
					this.suggestContent.shift();
				}
				this.suggestContent.push(this.searchContent);
			},
			choose:function(e){
				var index = parseInt(e.target.getAttribute("data-index"));
				this.searchContent = this.suggestContent[index];
			},
			hasEqualInProject:function(index){
				return index === 0 || !(this.projects[index].company === this.projects[index-1].company);
			},
			hasEqualInSkill:function(index){
				return index === 0 || !(this.skills[index].own === this.skills[index-1].own);
			},
			datesFormat:function(title,s,e){
				return title + "(" + s + "-" + e + ")";
			},
			suggestShow:function(e){
				//判断点击的是不是搜索框
				this.suggest = (e.target === $("input.form-search")[0]);
			},
			searchIconClick:function(){
				this.searchShow = !this.searchShow;
			},
			searchHide:function(){
				this.searchShow = false;
			}
		}
	});
})($);