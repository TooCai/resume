;
(function() {
	var vm = new Vue({
		el: "#app",
		data: {
			userName: "崔中华",
			sideInfos: [{
				title: "Contact. 联系方式",
				content: [{
					iconClass: "fa fa-envelope",
					text: "邮箱:1127254551@qq.com"
				}, {
					iconClass: "fa fa-qq",
					text: "QQ:1127254551"
				}, {
					iconClass: "fa fa-mobile fa-2x",
					text: "Tel:18856953069"
				}]
			}, {
				title: "Application. 应聘岗位",
				content: [{
					iconClass:"",
					text:"前端工程师"
				}]
			}, {
				title: "Tech. 技能点",
				content: [{
					iconClass:"",
					text:"HTML",
					rate:"width:60%"
				},{
					iconClass:"",
					text:"CSS",
					rate:"width:40%"
				},
				{
					iconClass:"",
					text:"JavaScript",
					rate:"width:65%"
				},
				{
					iconClass:"",
					text:"Java",
					rate:"width:30%"
				}]
			}],
			myselfs:[{
				userK:"姓名",
				userN:"崔中华"
			},{
				userK:"性别",
				userN:"男"
			},{
				userK:"年龄",
				userN:24
			},{
				userK:"学历",
				userN:"本科"
			},{
				userK:"毕业院校",
				userN:"合肥学院"
			},{
				userK:"专业",
				userN:"计算机科学与技术"
			}]
		}
	});
})();