let inputUsd = document.querySelector(".usd");
let inputUser = document.querySelector(".user");
let transferBtn = document.querySelector(".transfer-btn");
let headerPage = document.querySelector(".header");
let succsesfulyPage = document.querySelector(".ssecssesfuly-wrapper");
let makeMoreBtn = document.querySelector(".make-more-btn");
let countUsd = document.querySelector(".count-usd");
let sendingUser = document.querySelector(".sending-user");
let balanceBalance = document.querySelector(".balance-balance");
let balanceCount = 4730510;
let count = 0;

transferBtn.addEventListener("click", () => {
  let numberValue = 0;
  numberValue = inputUsd.value;
  if (
    balanceCount < numberValue ||
    inputUsd.value === "" ||
    inputUser.value === ""
  ) {
    console.log("error");
  } else {
    count = balanceCount - parseInt(numberValue);
    balanceCount = balanceCount - parseInt(numberValue);
    balanceBalance.innerHTML = `${count.toLocaleString()} $`;
    headerPage.classList.add("hidden");
    succsesfulyPage.classList.remove("hidden");
    countUsd.innerHTML = `${inputUsd.value} $`;
    sendingUser.innerHTML = `@${inputUser.value}`;
  }
});

makeMoreBtn.addEventListener("click", () => {
  succsesfulyPage.classList.add("hidden");
  headerPage.classList.remove("hidden");
  countUsd.innerHTML = "";
  sendingUser.innerHTML = "";
  inputUsd.value = "";
  inputUser.value = "";
});
