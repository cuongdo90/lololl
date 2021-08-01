// ma trận toàn cục điều khiển mọi hoạt động của game
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  
  // các biến toàn cục dùng để tính giờ
var secs = 0;
var currentSeconds = 0;
var currentMinutes = 0;
var timer;
  
  // gọi sự kiện bắt đầu game khi ấn nút play
$("#play").bind("click",function(){
    initialize();
    beginTime();
$("#alert_puzzle").text("");
  })
  
  // Khi click vào 1 sô thì gọi đến hàm move để di chuyển
$("#puzzle .cell-puzzle").bind("click",function() {
    if(secs > 0){
      var obj = $(this);
      move(obj);
    }
  })
  
  // hàm init game, gọi 1 dãy số từ 1 đến 15 bất kì, sắp xếp các element theo dãy số đó để bắt đầu game
function initialize(){
    var arrRandomNumber = shuffleMatrix();
  
    var count = 0;
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        var number = arrRandomNumber[count];
        matrix[i][j] = number;
  
        if (i == 3 && j == 3) {
          matrix[i][j] = 0;
        }
  
        $("#puzzle .cell-puzzle[number=" + number + "]").css("top", i * 60 + "px");
        $("#puzzle .cell-puzzle[number=" + number + "]").css("left", j * 60 + "px");
        count++;
      }
    }
  }