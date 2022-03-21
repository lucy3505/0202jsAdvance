/**
 * mutationObserver
 *
 * mutate->v
 * mutation->n 变化
 *
 *
 *
 */

const oTarget = document.querySelector("#app");

function callback(target) {
  console.log(target);
}

function cb(mutationList, observer) {
  console.log(mutationList, observer);
  mutationList.forEach((mutation) => {
    callback(mutation);
  });
}
const observer = new MutationObserver(cb);
observer.observe(oTarget, {
  attributes: true,
  childList: true,
  subtree: true,
});
const oTitle = oTarget.querySelector("h1");

oTitle.innerText = "this is a title";
oTitle.className = "title";

const oPara = document.createElement("p");
oPara.innerHTML = "this is content";
oTarget.appendChild(oPara);
