var cameraSwich = true
var IconCar = ''
var ZhiYou = {
	Init: function() {
		ZhiYou.addToolbar() /*添加toolbar栏*/
		ZhiYou.addIcon() /*添加Icon*/
        ZhiYou.defaultAppend()
		setInterval(function () {
            ZhiYou.changeNavData()

        },60000)//
	},
	addIcon: function() {
		$(document.body).append(
			'<div class="Icon" id="IconCar1" onclick="ZhiYou.addInfoWindow(0,0,\'che1\')" style="top:-50px;left:-50px"></div>' +
			'<div class="Icon" id="IconCar2"  onclick="ZhiYou.addInfoWindow(0,0,\'che2\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCar3"  onclick="ZhiYou.addInfoWindow(0,0,\'che3\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCar4"  onclick="ZhiYou.addInfoWindow(0,0,\'che4\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCar5"  onclick="ZhiYou.addInfoWindow(0,0,\'che5\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCharge1"  onclick="ZhiYou.addInfoWindow(0,0,\'c1\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCharge2"  onclick="ZhiYou.addInfoWindow(0,0,\'c2\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCharge3"  onclick="ZhiYou.addInfoWindow(0,0,\'c3\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCharge4"  onclick="ZhiYou.addInfoWindow(0,0,\'c4\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconCharge5"  onclick="ZhiYou.addInfoWindow(0,0,\'c5\')" style="top:-50px;left: -50px"></div>' +
			'<div class="Icon" id="IconAblou"  onclick="ZhiYou.addInfoWindow(0,0,\'2bian\')" style="top:-50px;left: -50px"></div>'
		)
		IconCar1 = $("#IconCar1")
		IconCar2 = $("#IconCar2")
		IconCar3 = $("#IconCar3")
		IconCar4 = $("#IconCar4")
		IconCar5 = $("#IconCar5")
		IconCharge1 = $("#IconCharge1")
		IconCharge2 = $("#IconCharge2")
		IconCharge3 = $("#IconCharge3")
		IconCharge4 = $("#IconCharge4")
		IconCharge5 = $("#IconCharge5")
		IconAblou = $("#IconAblou")

	},
	addToolbar: function() {
		/*添加toolbar栏*/
		$(document.body).append(
			"<div class='zu-toolbar'>" +
			"<div class='zu-control-group'>" +
			"<div id='leftTools' class='toolbarButton'>" +
			"<div id='toolbar-chargingTool' class='zu-button'>" +
			"<div class='zu-button-icon icon-charging iconfont'></div>" +
			"<div class='zu-button-icon icon-chongdian1 iconfont'></div>" +
			"<div class='zu-tooltip'>充电</div>" +
			"</div>" +
			"<div id='toolbar-simulationTool' class='zu-button'>" +
			"<div class='zu-button-icon icon-monikaoshi iconfont'></div>" +
			"<div class='zu-tooltip'>工况</div>" +
			"<div id='toolbar-simulationToolInfo'>" +
			"<div class='zu-button' >" +
			"<div class='zu-button-icon icon-numberone iconfont'></div>" +
			"<div class='moni-tooltip'>当变压器负载高于70%时，车辆电量大于70%时，反向放电</div>" +

			"</div>" +
			"<div class='zu-button'>" +
			"<div class='zu-button-icon icon-numbertwo iconfont'></div>" +
			"<div class='moni-tooltip'>当变压器负载处于30%——70%时，车辆电量处于30-70%时,根据电价信号有充有放</div>" +
			"</div>" +
			"<div class='zu-button'>" +
			"<div class='zu-button-icon icon-numberthree iconfont'></div>" +
			"<div class='moni-tooltip'>当变压器负载低于30%时，车辆电量低于30%时，立即充电</div>" +
			"</div>" +

			"</div>" +

			"</div>" +
			"<div id='toolbar-dataTool' class='zu-button'>" +
			"<div class='zu-button-icon icon-shuju1 iconfont'></div>" +
			"<div class='zu-tooltip'>数据</div>" +
			"</div>" +

			"</div>" +
			"<div id='rightTools'  class='toolbarButton'>" +
			"<div id='toolbar-cameraTool' class='zu-button'>" +
			"<div class='zu-button-icon icon-xiangji iconfont'></div>" +
			"<div class='zu-button-icon icon-moniqi iconfont'></div>" +
			"<div class='zu-tooltip'>系统图</div>" +
			"</div>" +
            "<div id='toolbar-cityTool' class='zu-button'>" +
            "<div class='zu-button-icon icon-chengshi iconfont'></div>" +
            "<div class='zu-tooltip'>城市级</div>" +
            "</div>" +
			"</div>" +
			"</div>" +
			"</div>"
		);
        /*城市级点击跳转toolbar-cityTool*/
        $("#toolbar-cityTool").click(function() {
            window.location.href="http://demo.crossyo.com:3920/example1"
        })
		/*浮动显示tips*/
		$(".zu-control-group .zu-button").hover(function() {
			$(this).children(".zu-tooltip").css("visibility", "visible");
		}, function() {
			$(this).siblings().children(".zu-tooltip").css("visibility", "hidden");
			$(this).children(".zu-tooltip").css("visibility", "hidden");
		});
		/* number tips*/
		$("#toolbar-simulationToolInfo .zu-button").hover(function() {
			$(this).children(".moni-tooltip").css("visibility", "visible");
		}, function() {
			$(this).siblings().children(".moni-tooltip").css("visibility", "hidden");
			$(this).children(".moni-tooltip").css("visibility", "hidden");
		});

		$("#toolbar-simulationTool").click(function() {
			$('#toolbar-simulationToolInfo ').toggle()
		})

		$("#toolbar-chargingTool").click(function() {
			$('.icon-charging').toggle()
			$('.icon-chongdian1').toggle()
			if($("#toolbar-chargingTool .zu-tooltip").text() == '充电') {
				$("#toolbar-chargingTool .zu-tooltip").text('放电')
				LJ.L_PlanNumber=8;
				LJ.L_ChangeAnimationDirection(true);
			} else {
				$("#toolbar-chargingTool .zu-tooltip").text('充电')
				LJ.L_PlanNumber=7;
                LJ.L_ChangeAnimationDirection(false);
			}
		})
		$("#toolbar-cameraTool").click(function() {
			$('.icon-xiangji').toggle()
			$('.icon-moniqi').toggle()
			if($("#toolbar-cameraTool .zu-tooltip").text() == '系统图') {
				$("#toolbar-cameraTool .zu-tooltip").text('人济大厦')
			} else {
				$("#toolbar-cameraTool .zu-tooltip").text('系统图')
			}
			switchcamera(!cameraSwich)
			cameraSwich = !cameraSwich
		})
	},
	addInfoWindow: function(left, top, name) {
		$(".zu-infoWindow").remove();
		var china
		if(name == 'che1') {
			china = '车1'
		} else if(name == 'che2') {
			china = '车2'
		} else if(name == 'che3') {
			china = '车3'
		} else if(name == 'che4') {
			china = '车4'
		} else if(name == 'che5') {
			china = '车5'
		} else if(name == 'c1') {
			china = '充电桩1'
		} else if(name == 'c2') {
			china = '充电桩2'
		} else if(name == 'c3') {
			china = '充电桩3'
		} else if(name == 'c4') {
			china = '充电桩4'
		} else if(name == 'c5') {
			china = '充电桩5'
		} else if(name == '2bian') {
			china = '2号电表箱'
		}
		$(document.body).append(
			'<div  class="zu-infoWindow"  >' +
			'  <div class="fl info"> ' +
            '<i>×</i>' +
            '   <div class="info-content"> ' +
			'    <h3>' + china + '</h3>' +
			'   </div> ' +
			'   <div class="decorate_right_top"><img src="img/title_top.png"></div> ' +
			'   <div class="decorate_left_foot"><img src="img/title_bto.png"></div> ' +
			'  </div> ' +
			' </div>'
		)
		ZhiYou.getJson(name) //ajax请求接口获取数据
		//style="left: '+left+'px;top:'+top+'px;"

		$(".zu-infoWindow i").click(function() {
			$(".zu-infoWindow").remove()
		})
	},
	getJson: function(name) {
		var data
		$.ajax({
			url: apiHost.testUrl,
			success: function(result) {
				data = JSON.parse(result)[0]
                ZhiYou.changeNavData()
				if(name == 'c1' || name == 'c2' || name == 'c3' || name == 'c4' || name == 'c5') {
					/*power_ac	交流功率	Float	千瓦(KW)
					voltage_dc	直流电压	Float	伏特(V)
					current_dc	直流电流	Float	安培(A)
					power_dc	直流功率	Float	千瓦(KW)
					transformer_power	2#变功率	Float	千瓦(KW)
					load_rate	负载率	Float	如果以%表示需要乘以100
					remain_time	剩余充电时间	Integer	单位是分钟
					soc	电池核电状态	Float	如果以%表示需要乘以100
					voltage_charge	充电电压	Float	伏特(V)
					current_charge	充电电流	Float	安培(A)
					charging	　是否有汽车在充电	Boolean	true表示有车在充电，false表示没有充电*/

					$(".info-content").append('<div class="info-table"> ' +
						'     <span>交流功率:</span> ' +
						'     <span>' + data.power_ac + '千瓦</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>直流电压:</span> ' +
						'     <span>' + data.voltage_dc + '伏特</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>直流电流:</span> ' +
						'     <span>' + data.current_dc + '安培</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>直流功率:</span> ' +
						'     <span>' + data.power_dc + '千瓦</span> ' +
						'    </div> '
					)
				}
				if(name == '2bian') {
					$(".info-content").append('<div class="info-table"> ' +
						'     <span>功率:</span> ' +
						'     <span>' + (data.transformer_power).toFixed(2) + '千瓦</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>负载率:</span> ' +
						'     <span>' + ((data.load_rate) * 100).toFixed(2) + '%</span> ' +
						'    </div> '
					)
				}

				if(name == 'che1' || name == 'che2' || name == 'che3' || name == 'che4' || name == 'che5') {
					$(".info-content").append('<div class="info-table"> ' +
						'     <span>剩余充电时间:</span> ' +
						'     <span>' + data.remain_time + '分钟</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>电池核电状态:</span> ' +
						'     <span>' + ((data.soc) * 100).toFixed(2) + '%</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>充电电压:</span> ' +
						'     <span>' + data.voltage_charge + '伏特</span> ' +
						'    </div> ' +
						'    <div class="info-table"> ' +
						'     <span>充电电流:</span> ' +
						'     <span>' + data.current_charge + '安培</span> ' +
						'    </div> '
					)
				}

			}
		});
	},
	defaultAppend:function(){
        $.ajax({
            url: apiHost.testUrl,
            success: function(result) {
                data = JSON.parse(result)[0]
                console.log(data)
                $(document.body).append('<div class="navBig" ></div>')
                $('.navBig').append(
                    '<div class="nav-scrollbar demo1"> ' +
                    '   <img src="img/smallback.gif" alt=""> ' +
                    '   <div class="nav-title" > ' +
                    '    <i>1号充电桩</i> ' +
                    '   </div> ' +
                    '   <ul class="_container" id="demo1"> ' +
                    '    <li><span>交流功率</span><span>' + data.power_ac + '千瓦</span></li> ' +
                    '    <li><span>直流电压</span><span>' + data.voltage_dc + '伏特</span></li> ' +
                    '    <li><span>直流电流</span><span>' + data.current_dc + '安培</span></li> ' +
                    '    <li><span>直流功率</span><span>' + data.power_dc + '千瓦</span></li> ' +
                    '   </ul> ' +
                    '  </div>' +
                    '<div class="nav-scrollbar demo2"> ' +
                    '   <img src="img/smallback.gif" alt=""> ' +
                    '   <div class="nav-title" > ' +
                    '    <i>2#变压器</i> ' +
                    '   </div> ' +
                    '   <ul class="_container" id="demo2"> ' +
                    '    <li><span>功率</span><span>' + (data.transformer_power).toFixed(2) + '千瓦</span></li> ' +
                    '    <li><span>负载率</span><span>' + ((data.load_rate) * 100).toFixed(2) + '%</span></li> ' +
                    '   </ul> ' +
                    '  </div>' +
                    '<div class="nav-scrollbar demo3"> ' +
                    '   <img src="img/smallback.gif" alt=""> ' +
                    '   <div class="nav-title" > ' +
                    '    <i>车1</i> ' +
                    '   </div> ' +
                    '   <ul class="_container" id="demo3"> ' +
                    '    <li><span>剩充电时间</span><span>' + data.remain_time + '分钟</span></li> ' +
                    '    <li><span>电池状态</span><span>' + ((data.soc) * 100).toFixed(2) + '%</span></li> ' +
                    '    <li><span>充电电压</span><span>' + data.voltage_charge + '伏特</span></li> ' +
                    '    <li><span>充电电流</span><span>' + data.current_charge + '安培</span></li> ' +
                    '   </ul> ' +
                    '  </div>'
                )
                /*这是启动方式*/
                /*
                 * demo 父容器(ul)的id
                 * -36px 子元素li的高度
                 * 3000  滚动间隔时间
                 * 每次滚动持续时间可到css文件中修改
                 */
                myScroll.upScroll("demo1", "-66px", 2000);
                myScroll.upScroll("demo2", "-66px", 4000);
                myScroll.upScroll("demo3", "-66px", 3000);
            }
        })

    },
	changeNavData: function() {
        $.ajax({
            url: apiHost.testUrl,
            success: function(result) {
                data = JSON.parse(result)[0]
                console.log(data)
				/*挨个替换*/
                $("#demo1 li:nth-child(1) span:nth-child(2)").each(function(index){
                    $(this).text(data.power_ac + '千瓦')
                });
                $("#demo1 li:nth-child(2) span:nth-child(2)").each(function(index){
                    $(this).text(data.voltage_dc + '伏特')
                });
                $("#demo1 li:nth-child(3) span:nth-child(2)").each(function(index){
                    $(this).text(data.current_dc + '安培')
                });
                $("#demo1 li:nth-child(4) span:nth-child(2)").each(function(index){
                    $(this).text(data.power_dc + '千瓦')
                });
                $("#demo2 li:nth-child(1) span:nth-child(2)").each(function(index){
                    $(this).text((data.transformer_power).toFixed(2)+ '千瓦')
                });
                $("#demo2 li:nth-child(2) span:nth-child(2)").each(function(index){
                    $(this).text(((data.load_rate) * 100).toFixed(2) + '%')
                });
                $("#demo3 li:nth-child(1) span:nth-child(2)").each(function(index){
                    $(this).text(data.remain_time + '分钟')
                });
                $("#demo3 li:nth-child(2) span:nth-child(2)").each(function(index){
                    $(this).text(((data.soc) * 100).toFixed(2) + '%')
                });
                $("#demo3 li:nth-child(3) span:nth-child(2)").each(function(index){
                    $(this).text(data.voltage_charge + '伏特')
                });
                $("#demo3 li:nth-child(4) span:nth-child(2)").each(function(index){
                    $(this).text(data.current_charge + '安培')
                });

			}
		})
	},
	changeIconCar1Position(left, top) {
		IconCar1.css("left", left)
		IconCar1.css("top", top)
	},
	changeIconCar2Position(left, top) {
		IconCar2.css("left", left)
		IconCar2.css("top", top)
	},
	changeIconCar3Position(left, top) {
		IconCar3.css("left", left)
		IconCar3.css("top", top)
	},
	changeIconCar4Position(left, top) {
		IconCar4.css("left", left)
		IconCar4.css("top", top)
	},
	changeIconCar5Position(left, top) {
		IconCar5.css("left", left)
		IconCar5.css("top", top)
	},
	changeIconCharge1Position(left, top) {
		IconCharge1.css("left", left)
		IconCharge1.css("top", top)
	},
	changeIconCharge2Position(left, top) {
		IconCharge2.css("left", left)
		IconCharge2.css("top", top)
	},
	changeIconCharge3Position(left, top) {
		IconCharge3.css("left", left)
		IconCharge3.css("top", top)
	},
	changeIconCharge4Position(left, top) {
		IconCharge4.css("left", left)
		IconCharge4.css("top", top)
	},
	changeIconCharge5Position(left, top) {
		IconCharge5.css("left", left)
		IconCharge5.css("top", top)
	},
	changeIconAblouPosition(left, top) {
		IconAblou.css("left", left)
		IconAblou.css("top", top)
	},

}
$(function() {
	setTimeout(function() {
		ZhiYou.Init()
	}, 5000)
	//默认执行一遍
})