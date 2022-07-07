window.onload = () => {
	var bubbleNum = 0;
	var clearedBubble = 0;
	setInterval(() => {
		var bubble = document.createElement("div");
		bubble.classList.add("bubbles");
		var bottomSize = Math.round(Math.random() * 100);
		if (bottomSize >= 50) {
			bottomSize -= 35;
		}
		
		bubble.style.left = Math.round(Math.random() * 100) + "%";
		bubble.style.bottom = bottomSize + "%";
		bubble.id = bubbleNum;
		bubbleNum++;
		document.body.appendChild(bubble);
		console.log("生成:", bubble);
		setTimeout(() => {
			clearedBubble += 1;
			document.getElementById(clearedBubble - 1).remove();
		}, 11950);
	}, 2000);
};
