var boss_1 = [];
var boss_2 = [];
var boss_3 = [];
var boss_4 = [];
var boss_5 = [];

var guide = ["예약하기 : !예약 / 네임드",
			 "이월예약하기 : !이월예약 / 네임드",
			 "예약 현황 보기 : !현황",
			 "참전 후 끝 : !끝",
			 "예약 취소 하기 : !취소",
			 "이월 참전 후 끝 : !이월끝",
			 "이월예약 취소 하기 : !이월취소",
			];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
	// 사용법
	if (msg == "!사용법") {
		replier.reply(guide.join("\n"));
	}

	//예약
	if (msg.indexOf("!예약") == 0) {
		if (msg == "!예약") {
			replier.reply("예약실패");
		} else {		
			//예약 중복 방지
			var u_overlap = 0;
			var damage = " ";
			
			for (i=0; i<boss_1.length; i++){
				if (boss_1[i] == sender) {
					u_overlap = 1;
				}
			}
			for (i=0; i<boss_2.length; i++){
				if (boss_2[i] == sender) {
					u_overlap = 1;
				}
			}
			for (i=0; i<boss_3.length; i++){
				if (boss_3[i] == sender) {
					u_overlap = 1;
				}
			}
			for (i=0; i<boss_4.length; i++){
				if (boss_4[i] == sender) {
					u_overlap = 1;
				}
			}
			for (i=0; i<boss_5.length; i++){
				if (boss_5[i] == sender) {
					u_overlap = 1;
				}
			}

			if (u_overlap==1) {
				replier.reply("이미 예약중입니다.");
			} else {
				if (msg.split("/")[1].indexOf("1") == 0 || msg.split("/")[1].indexOf("1") == 1) {
					//1 네임드 
					boss_1.push (sender);
					replier.reply(sender + msg.split("/")[1] + " 예약완료");
				} else if (msg.split("/")[1].indexOf("2") == 0 || msg.split("/")[1].indexOf("2") == 1) {
					//2 네임드 
					boss_2.push (sender);
					replier.reply(sender + msg.split("/")[1] + " 예약완료");
				} else if (msg.split("/")[1].indexOf("3") == 0 || msg.split("/")[1].indexOf("3") == 1) {
					//3 네임드 
					boss_3.push (sender);
					replier.reply(sender + msg.split("/")[1] + " 예약완료");
				} else if (msg.split("/")[1].indexOf("4") == 0 || msg.split("/")[1].indexOf("4") == 1) {
					//4 네임드 
					boss_4.push (sender);
					replier.reply(sender + msg.split("/")[1] + " 예약완료");
				} else if (msg.split("/")[1].indexOf("5") == 0 || msg.split("/")[1].indexOf("5") == 1) {
					//5 네임드 
					boss_5.push (sender);
					replier.reply(sender + msg.split("/")[1] + " 예약완료");
				} else {
					// 예약실패
					replier.reply("예약실패");
				}  
			}
		}
	}

	//이월예약 
	if (msg.indexOf("!이월예약") == 0) {
		if (msg == "!이월예약") {
			replier.reply("이월예약실패");
		} else {
			if (msg.split("/")[1].indexOf("1") == 0 || msg.split("/")[1].indexOf("1") == 1) {
				//1 네임드 
				boss_1.push ("이월_" + sender);
				replier.reply("이월_" + sender + msg.split("/")[1] + "이월예약완료");
			} else if (msg.split("/")[1].indexOf("2") == 0 || msg.split("/")[1].indexOf("2") == 1) {
				//2 네임드 
				boss_2.push ("이월_" + sender);
				replier.reply("이월_" + sender + msg.split("/")[1] + "이월예약완료");
			} else if (msg.split("/")[1].indexOf("3") == 0 || msg.split("/")[1].indexOf("3") == 1) {
				//3 네임드 
				boss_3.push ("이월_" + sender);
				replier.reply("이월_" + sender + msg.split("/")[1] + "이월예약완료");
			} else if (msg.split("/")[1].indexOf("4") == 0 || msg.split("/")[1].indexOf("4") == 1) {
				//4 네임드 
				boss_4.push ("이월_" + sender);
				replier.reply("이월_" + sender + msg.split("/")[1] + "이월예약완료");
			} else if (msg.split("/")[1].indexOf("5") == 0 || msg.split("/")[1].indexOf("5") == 1) {
				//5 네임드 
				boss_5.push ("이월_" + sender);
				replier.reply("이월_" + sender + msg.split("/")[1] + "이월예약완료");
			} else {
				// 예약실패
				replier.reply("이월예약실패");
			}  
		}
	}

	//예약 현황 보기
	if (msg == "!현황") {
		replier.reply("예약현황 \n1넴 \n" + boss_1.join(", ") + "\n\n2넴 \n" + boss_2.join(", ")+ "\n\n3넴 \n" + boss_3.join(", ")+ "\n\n4넴 \n" + boss_4.join(", ")+ "\n\n5넴 \n" + boss_5.join(", "));
	}

	// 초기화
	if (msg == "!초기화") {
		for (var i = boss_1.length; i>0; i--){
			boss_1.pop();
		}
		for (var i = boss_2.length; i>0; i--){
			boss_2.pop();
		}
		for (var i = boss_3.length; i>0; i--){
			boss_3.pop();
		}
		for (var i = boss_4.length; i>0; i--){
			boss_4.pop();
		}
		for (var i = boss_5.length; i>0; i--){
			boss_5.pop();
		}
		replier.reply("초기화 완료");
	}

	//끝 and 취소
	if (msg == "!끝" || msg == "!취소") {
		var m = 0;
		for (i=0; i<boss_1.length; i++){
			if (boss_1[i] == sender) {
				boss_1.splice(boss_1.indexOf(sender),1);
				m = 1;
			}
		}
		for (i=0; i<boss_2.length; i++){
			if (boss_2[i] == sender) {
				boss_2.splice(boss_2.indexOf(sender),1);
				m = 2;
			}
		}
		for (i=0; i<boss_3.length; i++){
			if (boss_3[i] == sender) {
				boss_3.splice(boss_3.indexOf(sender),1);
				m = 3;
			}
		}
		for (i=0; i<boss_4.length; i++){
			if (boss_4[i] == sender) {
				boss_4.splice(boss_4.indexOf(sender),1);
				m = 4;
			}
		}
		for (i=0; i<boss_5.length; i++){
			if (boss_5[i] == sender) {
				boss_5.splice(boss_5.indexOf(sender),1);
				m = 5;
			}
		}

		if (m == 0) {
			replier.reply(sender + " 예약 없음");
		} else {
			replier.reply(sender + m + "넴 " + " 예약 삭제 완료");
		}
	}

	//이월 끝 and 이월 취소
	if (msg == "!이월끝" || msg == "!이월취소") {
		var m = 0;
		var sender1 = "이월_" + sender;
		for (i=0; i<boss_1.length; i++){
			if (boss_1[i] == sender1) {
				boss_1.splice(boss_1.indexOf("이월_" + sender),1);
				m = 1;
			}
		}
		for (i=0; i<boss_2.length; i++){
			if (boss_2[i] == sender1) {
				boss_2.splice(boss_2.indexOf("이월_" + sender),1);
				m = 2;
			}
		}
		for (i=0; i<boss_3.length; i++){
			if (boss_3[i] == sender1) {
				boss_3.splice(boss_3.indexOf("이월_" + sender),1);
				m = 3;
			}
		}
		for (i=0; i<boss_4.length; i++){
			if (boss_4[i] == sender1) {
				boss_4.splice(boss_4.indexOf("이월_" + sender),1);
				m = 4;
			}
		}
		for (i=0; i<boss_5.length; i++){
			if (boss_5[i] == sender1) {
				boss_5.splice(boss_5.indexOf("이월_" + sender),1);
				m = 5;
			}
		}

		if (m == 0) {
			replier.reply(sender + " 이월예약 없음");
		} else {
			replier.reply(sender + " " + m + "넴 " + "이월예약 삭제 완료");
		}
	}
}
