var boss_1 = {};
var boss_2 = {};
var boss_3 = {};
var boss_4 = {};
var boss_5 = {};
var res_list = [];

var guide = ["* / 앞뒤로 띄어쓰기 하면 작동 안할수도 있습니다.",
			 "예약 현황 보기 : !현황 \n",

			 "예약하기 : !예약 / 네임드 / 딜량",
			 "참전 완료 : !끝",
			 "예약 취소 : !취소 \n",

			 "이월 예약 : !이월예약 / 네임드 / 딜량",
			 "이월 참전 완료 : !이월끝",
			 "이월 예약 취소 : !이월취소 \n",

			 "(다른 사람의 것으로 참전 할 경우 사용, 닉네임은 카톡 닉네임과 똑같이 쓸 것!!!)",
			 "대리 예약 : !2예약 / 해 줄 사람 카톡 닉네임 / 네임드 / 딜량",
			 "대리 예약 끝 : !2끝 / 해 줄 사람 카톡 닉네임",
			 "대리 예약 취소 : !2취소 / 해 줄 사람 카톡 닉네임 \n",

			 "대리 이월 예약 : !2이월예약 / 해 줄 사람 카톡 닉네임 / 네임드 / 딜량",
			 "대리 이월 예약 끝 : !2이월끝 / 해 줄 사람 카톡 닉네임",
			 "대리 이월 예약 취소 : !2이월취소 / 해 줄 사람 카톡 닉네임 \n"
			];

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
	// 사용법
	if (msg == "!사용법") {
		replier.reply(guide.join("\n"));
	}

	// 예약
	if (msg.indexOf("!예약") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined || msg.split("/")[2] === null || msg.split("/")[2] === undefined) {
			replier.reply("예약실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var u_overlap = 0;

			// 예약 중복 방지

			for (i=0; i<res_list.length; i++){
				if (res_list[i] == sender) {
					u_overlap = 1;
				}
			}

			if (u_overlap == 1) {
				replier.reply("이미 예약 중입니다.");
			} else {
				switch(msg.split("/")[1]) {
					case "1" :
						boss_1[sender] = msg.split("/")[2];
						res_list.push(sender);
						replier.reply(sender + " 1넴 예약완료");

						break;

					case "2" :
						boss_2[sender] = msg.split("/")[2];
						res_list.push(sender);
						replier.reply(sender + " 2넴 예약완료");

						break;

					case "3" :
						boss_3[sender] = msg.split("/")[2];
						res_list.push(sender);
						replier.reply(sender + " 3넴 예약완료");

						break;

					case "4" :
						boss_4[sender] = msg.split("/")[2];
						res_list.push(sender);
						replier.reply(sender + " 4넴 예약완료");

						break;

					case "5" :
						boss_5[sender] = msg.split("/")[2];
						res_list.push(sender);
						replier.reply(sender + " 5넴 예약완료");

						break;
					
					default:
						replier.reply("예약실패, 네임드 숫자를 확인해주세요.");
				}
			}
		}
	}

	// 예약 현황 보기
	if (msg == "!현황") {
		var b1_list = "";
		var b2_list = "";
		var b3_list = "";
		var b4_list = "";
		var b5_list = "";

		for (key in boss_1) {
			b1_list = b1_list + key + " (" + boss_1[key] + "), ";
		}
		for (key in boss_2) {
			b2_list = b2_list + key + " (" + boss_2[key] + "), ";
		}
		for (key in boss_3) {
			b3_list = b3_list + key + " (" + boss_3[key] + "), ";
		}
		for (key in boss_4) {
			b4_list = b4_list + key + " (" + boss_4[key] + "), ";
		}
		for (key in boss_5) {
			b5_list = b5_list + key + " (" + boss_5[key] + "), ";
		}

		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined) {
		}

		replier.reply("예약현황 \n1넴 \n" + b1_list + "\n\n2넴 \n" + b2_list + "\n\n3넴 \n" + b3_list + "\n\n4넴 \n" + b4_list + "\n\n5넴 \n" + b5_list);
	}

	//끝 and 취소
	if (msg == "!끝" || msg == "!취소") {
		var k = 0;

		for(i=0; i<res_list.length; i++){
			if (res_list[i]==sender){
				k=1;
			}
		}

		if (k==1){
			delete boss_1[sender];
			delete boss_2[sender];
			delete boss_3[sender];
			delete boss_4[sender];
			delete boss_5[sender];

			res_list.splice(res_list.indexOf(sender),1);

			if (msg == "!끝") {
				replier.reply(sender + " 참전 완료");
			} else if (msg == "!취소"){
				replier.reply(sender + " 예약 취소");
			}
		} else {
			replier.reply("예약이 되어있지 않습니다.");
		}
	}

	// 이월 예약
	if (msg.indexOf("!이월예약") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined || msg.split("/")[2] === null || msg.split("/")[2] === undefined) {
			replier.reply("예약실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var u_overlap = 0;

			// 예약 중복 방지

			for (i=0; i<res_list.length; i++){
				if (res_list[i] == "이월_" + sender) {
					u_overlap = 1;
				}
			}

			if (u_overlap == 1) {
				replier.reply("이미 예약 중입니다.");
			} else {
				switch(msg.split("/")[1]) {
					case "1" :
						boss_1["이월_" + sender] = msg.split("/")[2];
						res_list.push("이월_" + sender);
						replier.reply(sender + " 1넴 이월예약완료");

						break;

					case "2" :
						boss_2["이월_" + sender] = msg.split("/")[2];
						res_list.push("이월_" + sender);
						replier.reply(sender + " 2넴 이월예약완료");

						break;

					case "3" :
						boss_3["이월_" + sender] = msg.split("/")[2];
						res_list.push("이월_" + sender);
						replier.reply(sender + " 3넴 이월예약완료");

						break;

					case "4" :
						boss_4["이월_" + sender] = msg.split("/")[2];
						res_list.push("이월_" + sender);
						replier.reply(sender + " 4넴 이월예약완료");

						break;

					case "5" :
						boss_5["이월_" + sender] = msg.split("/")[2];
						res_list.push("이월_" + sender);
						replier.reply(sender + " 5넴 이월예약완료");

						break;
					
					default:
						replier.reply("예약실패, 네임드 숫자를 확인해주세요.");
				}
			}
		}
	}

	// 이월 끝 and 취소
	if (msg == "!이월끝" || msg == "!이월취소") {
		var k = 0;

		for(i=0; i<res_list.length; i++){
			if (res_list[i]=="이월_" + sender){
				k=1;
			}
		}

		if (k==1){
			delete boss_1["이월_" + sender];
			delete boss_2["이월_" + sender];
			delete boss_3["이월_" + sender];
			delete boss_4["이월_" + sender];
			delete boss_5["이월_" + sender];

			res_list.splice(res_list.indexOf("이월_" + sender),1);

			if (msg == "!이월끝") {
				replier.reply(sender + "이월 참전 완료");
			} else if (msg == "!이월취소"){
				replier.reply(sender + "이월 예약 취소");
			}
		} else {
			replier.reply("예약이 되어있지 않습니다.");
		}
	}
	

	// 대신 예약해주기
	if (msg.indexOf("!2예약") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined || msg.split("/")[2] === null || msg.split("/")[2] === undefined || msg.split("/")[3] === null || msg.split("/")[3] === undefined) {
			replier.reply("예약실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var u_overlap = 0;

			// 예약 중복 방지

			for (i=0; i<res_list.length; i++){
				if (res_list[i] == msg.split("/")[1]) {
					u_overlap = 1;
				}
			}

			if (u_overlap == 1) {
				replier.reply("이미 예약 중입니다.");
			} else {
				switch(msg.split("/")[2]) {
					case "1" :
						boss_1[msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push(msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 1넴 예약완료");

						break;

					case "2" :
						boss_2[msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push(msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 2넴 예약완료");

						break;

					case "3" :
						boss_3[msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push(msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 3넴 예약완료");

						break;

					case "4" :
						boss_4[msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push(msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 4넴 예약완료");

						break;

					case "5" :
						boss_5[msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push(msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 5넴 예약완료");

						break;
					
					default:
						replier.reply("예약실패, 네임드 숫자를 확인해주세요.");
				}
			}
		}
	}

	//대리 끝 and 취소
	if (msg.indexOf("!2끝") == 0 || msg.indexOf("!2취소") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined) {
			replier.reply("예약 취소or끝 실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var k = 0;

			for(i=0; i<res_list.length; i++){
				if (res_list[i]==msg.split("/")[1]){
					k=1;
				}
			}

			if (k==1){
				delete boss_1[msg.split("/")[1]];
				delete boss_2[msg.split("/")[1]];
				delete boss_3[msg.split("/")[1]];
				delete boss_4[msg.split("/")[1]];
				delete boss_5[msg.split("/")[1]];

				res_list.splice(res_list.indexOf(msg.split("/")[1]),1);

				if (msg.indexOf("!2끝") == 0) {
					replier.reply(msg.split("/")[1] + " 참전 완료");
				} else if (msg.indexOf("!2취소") == 0){
					replier.reply(msg.split("/")[1] + " 예약 취소");
				}
			} else {
				replier.reply("예약이 되어있지 않습니다.");
			}
		}
	}

	// 대리 이월 예약
	if (msg.indexOf("!2이월예약") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined || msg.split("/")[2] === null || msg.split("/")[2] === undefined || msg.split("/")[3] === null || msg.split("/")[3] === undefined) {
			replier.reply("예약실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var u_overlap = 0;

			// 예약 중복 방지

			for (i=0; i<res_list.length; i++){
				if (res_list[i] == "이월_" + msg.split("/")[1]) {
					u_overlap = 1;
				}
			}

			if (u_overlap == 1) {
				replier.reply("이미 예약 중입니다.");
			} else {
				switch(msg.split("/")[2]) {
					case "1" :
						boss_1["이월_" + msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push("이월_" + msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 1넴 이월예약완료");

						break;

					case "2" :
						boss_2["이월_" + msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push("이월_" + msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 2넴 이월예약완료");

						break;

					case "3" :
						boss_3["이월_" + msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push("이월_" + msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 3넴 이월예약완료");

						break;

					case "4" :
						boss_4["이월_" + msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push("이월_" + msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 4넴 이월예약완료");

						break;

					case "5" :
						boss_5["이월_" + msg.split("/")[1]] = msg.split("/")[3] + " " + sender;
						res_list.push("이월_" + msg.split("/")[1]);
						replier.reply(msg.split("/")[1] + " 5넴 이월예약완료");

						break;
					
					default:
						replier.reply("예약실패, 네임드 숫자를 확인해주세요.");
				}
			}
		}
	}

	// 대리 이월 끝 and 취소
	if (msg.indexOf("!2이월끝") == 0 || msg.indexOf("!2이월취소") == 0) {
		if (msg.split("/")[1] === null || msg.split("/")[1] === undefined) {
			replier.reply("예약 취소or끝 실패");
			replier.reply("사용법을 확인해주세요.");
		} else {
			var k = 0;

			for(i=0; i<res_list.length; i++){
				if (res_list[i]=="이월_" + msg.split("/")[1]){
					k=1;
				}
			}

			if (k==1){
				delete boss_1["이월_" + msg.split("/")[1]];
				delete boss_2["이월_" + msg.split("/")[1]];
				delete boss_3["이월_" + msg.split("/")[1]];
				delete boss_4["이월_" + msg.split("/")[1]];
				delete boss_5["이월_" + msg.split("/")[1]];

				res_list.splice(res_list.indexOf("이월_" + msg.split("/")[1]),1);

				if (msg.indexOf("!2이월끝") == 0) {
					replier.reply(msg.split("/")[1] + "이월 참전 완료");
				} else if (msg.indexOf("!2이월취소") == 0){
					replier.reply(msg.split("/")[1] + "이월 예약 취소");
				}
			} else {
				replier.reply("예약이 되어있지 않습니다.");
			}
		}
	}


}