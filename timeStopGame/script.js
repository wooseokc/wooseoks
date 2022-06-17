//첫 페이지 세팅
const $howBox = document.querySelector('.howToPlay');
const $infoBox = document.querySelector('.infoBox');

$howBox.addEventListener('mouseover', ()=> {
  $infoBox.style.display = 'block';
});

$infoBox.addEventListener('mouseout', ()=> {
  $infoBox.style.display = 'none';
})

//play 화면
const $mainBox = document.querySelector('.mainBox');
const $playButton = document.querySelector('.play')

function targetSetting () {
  let second = Math.floor(Math.random()*100)
  while(second >=10 || second <= 5) {
    second = Math.floor(Math.random()*100)
  }
  const milliSeconds = Math.floor(Math.random()*1000)
  return `${second} ${milliSeconds}`
}

function challengePage () {
  //대기 화면 구성
  let timeArr= targetSetting().split(' ');
  $mainBox.innerHTML = `      
  <div class="targetNumber">${timeArr[0]}.${timeArr[1]}초</div>
  <button class="challenge">도전!</button>
  `

  // game 화면 구성
  const $challengeButton = document.querySelector('.challenge');

  function gamePage () {
    //page 구성
    $mainBox.innerHTML = `
    <div class="targetNumber">${timeArr[0]}.${timeArr[1]}초</div>
    <svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
    <g fill="#DB4C77" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;5;50;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     values="5;27;49;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     from="5" to="5"
                     values="5;50;50;5"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     begin="0s" dur="2.2s"
                     from="27" to="27"
                     values="27;49;5;27"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
            <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                     begin="0s" dur="2.2s"
                     values="50;50;5;50"
                     calcMode="linear"
                     repeatCount="indefinite" />
                <animate attributeName="cx"
                     from="49" to="49"
                     begin="0s" dur="2.2s"
                     values="49;5;27;49"
                     calcMode="linear"
                     repeatCount="indefinite" />
            </circle>
        </g>
    </g>
    </svg>
    <button class="stop">멈춰!</button>
    `

    //타이머 on
    const startTime = new Date();

    // 20초 지나면 실격
    let interval = setInterval(()=> {
      const stopTime = new Date();
      let startSecond = startTime.getSeconds();
      let startmilli = startTime.getMilliseconds();
      let stopSecond = stopTime.getSeconds();
      let stopmilli = stopTime.getMilliseconds();
      if (startmilli > stopmilli) {
        stopSecond -= 1;
        stopmilli +=1000;
      }
      if (stopSecond < startSecond) {
        stopSecond += 60;
      }
      const gameSecond = stopSecond - startSecond
      const gameMilli =stopmilli -startmilli;
      if (gameSecond >= 10) {
        clearInterval(interval);
        timeOut();
      }
    },100)


    //타이머 off 
    const $stopButton = document.querySelector('.stop');
    function gameStop () {
      // 타임 stop
      clearInterval(interval);
      const stopTime = new Date();
      let startSecond = startTime.getSeconds();
      let startmilli = startTime.getMilliseconds();
      let stopSecond = stopTime.getSeconds();
      let stopmilli = stopTime.getMilliseconds();
      if (startmilli > stopmilli) {
        stopSecond -= 1;
        stopmilli +=1000;
      }
      if (stopSecond < startSecond) {
        stopSecond += 60;
      }
      const gameSecond = stopSecond - startSecond
      const gameMilli =stopmilli -startmilli;

      // 결과 결정
      let targetSum = Number(timeArr[0]*1000) + Number(timeArr[1]);
      let timeSum = (gameSecond*1000) + gameMilli;

      let gap = Math.abs(targetSum-timeSum)

      if (gap <=500) {
        success(gameSecond, gameMilli);
      }
      else {
        fail(gameSecond, gameMilli)
      }
    }

    $stopButton.addEventListener('click', gameStop)

  }
  $challengeButton.addEventListener('click', gamePage)

}

function success (s, m) {
  $mainBox.innerHTML = `
  <div class="sucBox"> 축하합니다!</div>
  <div class="scoreBox">
    <p>당신의 시간은</p>
    <p>${s}.${m}초!</p>
  </div>
  <button class="retry">다시하기!</button>
  `

  const $retry = document.querySelector('.retry');
  $retry.addEventListener('click', challengePage)
}

function fail (s, m) {
  $mainBox.innerHTML = `
  <div class="sucBox"> 아쉽습니다!</div>
  <div class="scoreBox">
    <p>당신의 시간은</p>
    <p>${s}.${m}초!</p>
  </div>
  <button class="retry">다시하기!</button>
  `
  const $retry = document.querySelector('.retry');
  $retry.addEventListener('click', challengePage)
}
function timeOut () {
  $mainBox.innerHTML = `
  <div class="sucBox"> 아쉽습니다!</div>
  <div class="scoreBox">
    <p>다음번엔 과감하게</p>
    <p>멈추세요!</p>
  </div>
  <button class="retry">다시하기!</button>
  `
  const $retry = document.querySelector('.retry');
  $retry.addEventListener('click', challengePage)
}

$playButton.addEventListener('click', challengePage)

