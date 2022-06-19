/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const $btc = document.querySelector('#btc');
const $btcPrice = $btc.querySelector('.price');
const $btcRate = $btc.querySelector('.rate');

const $eth = document.querySelector('#eth');
const $ethPrice = $eth.querySelector('.price');
const $ethRate = $eth.querySelector('.rate');

const $sol = document.querySelector('#sol');
const $solPrice = $sol.querySelector('.price');
const $solRate = $sol.querySelector('.rate');

const $xrp = document.querySelector('#xrp');
const $xrpPrice = $xrp.querySelector('.price');
const $xrpRate = $xrp.querySelector('.rate');

const $wemix = document.querySelector('#wemix');
const $wemixPrice = $wemix.querySelector('.price');
const $wemixRate = $wemix.querySelector('.rate');

function moveNext(event) {
  const $next = document.querySelector('.next');
  const $current = document.querySelector('.current');
  const $prev = document.querySelector('.prev');
  const $Pprev = document.querySelector('.Pprev');
  const $Nnext = document.querySelector('.Nnext');
  $item = event.target;
  const defaultClass = 'item';
  if ($item.className === 'item next') {
    $next.className = `${defaultClass} current`;
    $Nnext.className = `${defaultClass} next`;
    $current.className = `${defaultClass} prev`;
    $prev.className = `${defaultClass} Pprev`;
    $Pprev.className = `${defaultClass} Nnext`;
  } else if ($item.className === 'item Nnext') {
    $next.className = `${defaultClass} prev`;
    $Nnext.className = `${defaultClass} current`;
    $current.className = `${defaultClass} Pprev`;
    $prev.className = `${defaultClass} Nnext`;
    $Pprev.className = `${defaultClass} next`;
  } else if ($item.className === 'item prev') {
    $next.className = `${defaultClass} Nnext`;
    $Nnext.className = `${defaultClass} Pprev`;
    $current.className = `${defaultClass} next`;
    $prev.className = `${defaultClass} current`;
    $Pprev.className = `${defaultClass} prev`;
  } else if ($item.className === 'item Pprev') {
    $next.className = `${defaultClass} Pprev`;
    $Nnext.className = `${defaultClass} prev`;
    $current.className = `${defaultClass} Nnext`;
    $prev.className = `${defaultClass} next`;
    $Pprev.className = `${defaultClass} current`;
  }
}

function getPrice() {
  // 비트코인
  function getBtc() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC')
      .then((res) => res.json())
      .then((data) => {
        // 가격 입력
        const price = data[0].trade_price.toLocaleString();
        $btcPrice.textContent = `${price}원`;
        // 증감률 입력
        const rate = (data[0].change_rate * 100).toFixed(2);
        $btcRate.textContent = `${rate}%`;
        // 색 결정
        const status = data[0].change;
        if (status === 'RISE') {
          $btc.querySelector('.coin-price').style.color = 'red';
        } else if (status === 'FALL') {
          $btc.querySelector('.coin-price').style.color = 'blue';
        } else {
          $btc.querySelector('.coin-price').style.color = 'black';
        }
      });
  }
  function getEth() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-ETH')
      .then((res) => res.json())
      .then((data) => {
        // 가격 입력
        const price = data[0].trade_price.toLocaleString();
        $ethPrice.textContent = `${price}원`;
        // 증감률 입력
        const rate = (data[0].change_rate * 100).toFixed(2);
        $ethRate.textContent = `${rate}%`;
        // 색 결정
        const status = data[0].change;
        if (status === 'RISE') {
          $eth.querySelector('.coin-price').style.color = 'red';
        } else if (status === 'FALL') {
          $eth.querySelector('.coin-price').style.color = 'blue';
        } else {
          $eth.querySelector('.coin-price').style.color = 'black';
        }
      });
  }
  function getSol() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-SOL')
      .then((res) => res.json())
      .then((data) => {
        // 가격 입력
        const price = data[0].trade_price.toLocaleString();
        $solPrice.textContent = `${price}원`;
        // 증감률 입력
        const rate = (data[0].change_rate * 100).toFixed(2);
        $solRate.textContent = `${rate}%`;
        // 색 결정
        const status = data[0].change;
        if (status === 'RISE') {
          $sol.querySelector('.coin-price').style.color = 'red';
        } else if (status === 'FALL') {
          $sol.querySelector('.coin-price').style.color = 'blue';
        } else {
          $sol.querySelector('.coin-price').style.color = 'black';
        }
      });
  }
  function getWemix() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-WEMIX')
      .then((res) => res.json())
      .then((data) => {
        // 가격 입력
        const price = data[0].trade_price.toLocaleString();
        $wemixPrice.textContent = `${price}원`;
        // 증감률 입력
        const rate = (data[0].change_rate * 100).toFixed(2);
        $wemixRate.textContent = `${rate}%`;
        // 색 결정
        const status = data[0].change;
        if (status === 'RISE') {
          $wemix.querySelector('.coin-price').style.color = 'red';
        } else if (status === 'FALL') {
          $wemix.querySelector('.coin-price').style.color = 'blue';
        } else {
          $wemix.querySelector('.coin-price').style.color = 'black';
        }
      });
  }
  function getXrp() {
    fetch('https://api.upbit.com/v1/ticker?markets=KRW-XRP')
      .then((res) => res.json())
      .then((data) => {
        // 가격 입력
        const price = data[0].trade_price.toLocaleString();
        $xrpPrice.textContent = `${price}원`;
        // 증감률 입력
        const rate = (data[0].change_rate * 100).toFixed(2);
        $xrpRate.textContent = `${rate}%`;
        // 색 결정
        const status = data[0].change;
        if (status === 'RISE') {
          $xrp.querySelector('.coin-price').style.color = 'red';
        } else if (status === 'FALL') {
          $xrp.querySelector('.coin-price').style.color = 'blue';
        } else {
          $xrp.querySelector('.coin-price').style.color = 'black';
        }
      });
  }

  getBtc();
  getEth();
  getSol();
  getXrp();
  getWemix();
}
getPrice();
setInterval(() => getPrice(), 1000);
// getPrice()
window.addEventListener('click', moveNext);
