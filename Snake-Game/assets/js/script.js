
var tabela = document.querySelector(".tabela");
var boxes = document.getElementsByClassName("box");
var modul = document.querySelector(".modul");
var iniciar = document.querySelector(".iniciar");

var table = {
  rowsCols: 21,
  boxes: 21*21
};

var snake = {
  direction: "right",
  position: [[6,10], [7,10], [8,10], [9,10], [10,10]],
  speed: 200,
  score: 0,
  final: 0,
  time: 0,
  canTurn: 0,
  inicio: function() {
    snake.direction = "right";
    snake.position = [[6,10], [7,10], [8,10], [9,10], [10,10]];
    snake.speed = 200;
    snake.score = 0;
    snake.time = 0;
    snake.canTurn = 0;
    tabela.innerHTML = "";
    createTable();
  }
};

// inicio jogo
snake.inicio();

iniciar.addEventListener("click", iniciarSnake);

document.addEventListener("keydown", function(e) {
  if (e.keyCode === 13 && snake.time === 0) {
    iniciarSnake();
  }
});

// iniciar jogo
function iniciarSnake() {
  modul.classList.add("hidden");
  clearInterval(checkPageInterval);
  snake.time = 1;
  renderCobra();
  randomComida();

  setInt = setInterval(function() {
    move();
  }, snake.speed);
}

// fim do jogo
function parar() {
  clearInterval(setInt);
  snake.final = snake.score;
  iniciar.querySelector("span").innerHTML = snake.final + " Points !";
  setTimeout(function() {
    iniciar.querySelector("span").innerHTML = "Play Snake";
  }, 2000);
  snake.inicio();
  modul.classList.remove("hidden");
}

// função mover o snake
function move() {
  // verificar movimento após comer
  comer();
  baterBorder();
  cobraBater();
  // mover cobra
  atualizarPosicao();
  renderCobra();
  document.addEventListener("keydown", turn);
  snake.canTurn = 1;
}

function atualizarPosicao() {
  // remover ultima parte da cobra
  boxes[snake.position[0][0] + snake.position[0][1] * table.rowsCols].classList.remove("snake");
  snake.position.shift();
  // adicionar parte da cobra
  var head = snake.position[snake.position.length - 1];
  switch (snake.direction) {
    case "left":
      snake.position.push([head[0] - 1, head[1]]);
      break;
    case "up":
      snake.position.push([head[0], head[1] - 1]);
      break;
    case "right":
      snake.position.push([head[0] + 1, head[1]]);
      break;
    case "down":
      snake.position.push([head[0], head[1] + 1]);
      break;
    default:
      console.log("no direction !");
  }
}

// verificar batida na borda
function baterBorder() {
  var headPos = snake.position.length-1;

  if((snake.position[headPos][0] > 20) && (snake.direction === "right")) snake.position[headPos][0] = 0;
  if((snake.position[headPos][0] < 0) && (snake.direction === "left")) snake.position[headPos][0] = 20;
  if((snake.position[headPos][1] > 20) && (snake.direction === "down")) snake.position[headPos][1] = 0;
  if((snake.position[headPos][1] < 0) && (snake.direction === "up")) snake.position[headPos][1] = 20;
}

// verifica contato
function cobraBater() {
  var headPos = snake.position.length-1;
  for (var i=0; i<headPos; i++) {
    if (snake.position[headPos].toString() === snake.position[i].toString()) {
      parar();
    }
  } 
}

// Verificar comida
function comer() {
  var head = snake.position[snake.position.length-1];
  var tail = snake.position[0];
  if (head.toString() === foodPos.toString()) {
    boxes[random].classList.remove("food");
    snake.position.unshift(tail);
    randomComida();
    snake.score += 10;
    score.innerHTML = snake.score + " pts";
  }
}

// random comida
function randomComida() {
  var randomX = Math.floor(Math.random() * table.rowsCols);
  var randomY = Math.floor(Math.random() * table.rowsCols);
  random = randomX + randomY * table.rowsCols;

  while (boxes[random].classList.contains("snake")) {
    randomX = Math.floor(Math.random() * table.rowsCols);
    randomY = Math.floor(Math.random() * table.rowsCols);
    random = randomX + randomY * table.rowsCols;
  }  
  boxes[random].classList.add("food");
  foodPos = [randomX, randomY];
}

// verificar posição e renderizar a cobra
function renderCobra() {
  for (var i=0; i<snake.position.length - 1; i++) {
    boxes[snake.position[i][0] + snake.position[i][1] * table.rowsCols].classList.add("snake");
  }
}

// verificar teclas pressionadas
function turn(e) {
  if (snake.canTurn) {
    switch (e.keyCode) {
      case 13:
        break;
      case 37:
        if (snake.direction === "right") return;
        snake.direction = "left";
        break;
      case 38:
        if (snake.direction === "down") return;
        snake.direction = "up";
        break;
      case 39:
        if (snake.direction === "left") return;
        snake.direction = "right";
        break;
      case 40:
        if (snake.direction === "up") return;
        snake.direction = "down";
        break;
      default:
        console.log("wrong key");
    }
    snake.canTurn = 0;
  }
}

// criação da tabela
function createTable() {
  if (tabela.innerHTML === "") {
    for (var i = 0; i<table.boxes; i++) {
      var divElt = document.createElement("div");
      divElt.classList.add("box");
      tabela.appendChild(divElt);
    }
    // barra de status
    var status = document.createElement("div");
    status.classList.add("status");
    tabela.appendChild(status);
    score = document.createElement("span");
    score.classList.add("score");
    score.innerHTML = snake.score + " pts";
    status.appendChild(score);
  }
}

// verificação do foco da página com o hasFocus
function checkPageFocus() {
  if (document.hasFocus()) {
    modul.classList.remove("hidden");
  }
  else {
    modul.classList.add("hidden");
  }
}
var checkPageInterval = setInterval(checkPageFocus, 300);

// swipe Showcase
$("document").ready(function() {
  $("body")
    .swipeDetector()
    .on("swipeLeft.sd swipeRight.sd swipeUp.sd swipeDown.sd", function(event) {
      if (event.type === "swipeLeft") {
        if (snake.direction === "right") return;
        snake.direction = "left";
      } else if (event.type === "swipeRight") {
        if (snake.direction === "left") return;
        snake.direction = "right";
      } else if (event.type === "swipeUp") {
        if (snake.direction === "down") return;
        snake.direction = "up";
      } else if (event.type === "swipeDown") {
        if (snake.direction === "up") return;
        snake.direction = "down";
      }
      snake.canTurn = 0;
    });
});

// swipe função
(function($) {
  $.fn.swipeDetector = function(options) {
    var swipeState = 0;
    var iniciarX = 0;
    var iniciarY = 0;
    var pixelOffsetX = 0;
    var pixelOffsetY = 0;
    var swipeTarget = this;
    var defaultSettings = {
      swipeThreshold: 30,
      useOnlyTouch: true
    };

    // inicialização
    (function inicio() {
      options = $.extend(defaultSettings, options);

      swipeTarget.on("mousedown touchiniciar", swipeiniciar);
      $("html").on("mouseup touchend", swipeEnd);
      $("html").on("mousemove touchmove", swiping);
    })();

    function swipeiniciar(event) {
      if (options.useOnlyTouch && !event.originalEvent.touches) return;

      if (event.originalEvent.touches) event = event.originalEvent.touches[0];

      if (swipeState === 0) {
        swipeState = 1;
        iniciarX = event.clientX;
        iniciarY = event.clientY;
      }
    }

    function swipeEnd(event) {
      if (swipeState === 2) {
        swipeState = 0;

        if (
          Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
          Math.abs(pixelOffsetX) > options.swipeThreshold
        ) {
          if (pixelOffsetX < 0) {
            swipeTarget.trigger($.Event("swipeLeft.sd"));
          } else {
            swipeTarget.trigger($.Event("swipeRight.sd"));
          }
        } else if (Math.abs(pixelOffsetY) > options.swipeThreshold) {
          if (pixelOffsetY < 0) {
            swipeTarget.trigger($.Event("swipeUp.sd"));
          } else {
            swipeTarget.trigger($.Event("swipeDown.sd"));
          }
        }
      }
    }

    function swiping(event) {
      if (swipeState !== 1) return;

      if (event.originalEvent.touches) {
        event = event.originalEvent.touches[0];
      }

      var swipeOffsetX = event.clientX - iniciarX;
      var swipeOffsetY = event.clientY - iniciarY;

      if (
        Math.abs(swipeOffsetX) > options.swipeThreshold ||
        Math.abs(swipeOffsetY) > options.swipeThreshold
      ) {
        swipeState = 2;
        pixelOffsetX = swipeOffsetX;
        pixelOffsetY = swipeOffsetY;
      }
    }

    return swipeTarget;
  };
})(jQuery);

// remover o scroll
function preventDefault(e){e.preventDefault();}
function disableScroll(){
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}
function enableScroll(){
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}
disableScroll();