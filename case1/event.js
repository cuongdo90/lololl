
// hàm tạo dãy số bất kì từ 1 đến 15
function shuffleMatrix(){
    var arr = [];
    while(arr.length < 15){
      var r = Math.floor(Math.random() * 15) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
    }
  
    return arr;
  }
  
  // hàm bắt đầu đếm giờ
function beginTime() {
    secs = 0;
    currentSeconds = 0;
    currentMinutes = 0;
    clearTimeout(timer);
    intervalTime();
  }
  
  // hàm đếm giờ
function intervalTime() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
  
    if(currentMinutes <= 9) {
      currentMinutes = "0" + currentMinutes;
    }
  
    if(currentSeconds <= 9) {
      currentSeconds = "0" + currentSeconds;
    }
  
    secs++;
    $("#board-time").text(currentMinutes + ":" + currentSeconds);
    timer = setTimeout('intervalTime()', 1000);
    console.log(secs);
  }
  
  // hàm di chuyển các ô.
function move(obj) {
    var numberCell = parseFloat(obj.attr("number"));
    var win = false;
  
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 4; j++) {
        if(matrix[i][j] == numberCell) {
          if(j > 0 && matrix[i][j-1] == 0) {
            $("#puzzle .cell-puzzle[number=0]").css("left", j * 60 + "px");
            obj.animate({
              'left': (j - 1) * 60 + 'px'
            }, 300);
  
            matrix[i][j - 1] = numberCell;
            matrix[i][j] = 0;
  
          } else if(j < 3 && matrix[i][j + 1] == 0) {
            $("#puzzle .cell-puzzle[number=0]").css("left",j * 60 + "px");
            obj.animate({
              'left': (j + 1) * 60 + 'px'
            }, 300);
  
            matrix[i][j + 1] = numberCell;
            matrix[i][j] = 0;
  
          } else if(i > 0 && matrix[i - 1][j] == 0) {
            $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
            obj.animate({
              'top': (i - 1) * 60 + 'px'
            },300);
  
            matrix[i-1][j] = numberCell;
            matrix[i][j] = 0;
  
          } else if(i<3 && matrix[i+1][j]==0) {
            $("#puzzle .cell-puzzle[number=0]").css("top", i * 60 + "px");
            obj.animate({
              'top': (i + 1) * 60 + 'px'
            },300);
  
            matrix[i + 1][j] = numberCell;
            matrix[i][j]=0;
          }
  
          win = checkWin();
          if (win){
            break;
          }
  
          return; 
        }
      }
    }
  }
  
  // hàm kiểm tra và báo chiến thắng
function checkWin(){
    var winner =false;
    var winString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0";
    var loseString = "1,2,3,4,5,6,7,8,9,10,11,12,13,15,14,0";
  
    var matrixStr = matrix.toString();
  
    if(winString == matrixStr) {
      clearTimeout(timer);
      $("#alert_puzzle").text("Bạn đã chiến thắng. Kỷ lục của bạn là " + $("#board-time").text());
  
    } else if (loseString == matrixStr) {
      $("#alert_puzzle").text('Bạn không có hy vọng để chiến thắng. Ấn nút "click to play" để chơi game mới');
    }
  }