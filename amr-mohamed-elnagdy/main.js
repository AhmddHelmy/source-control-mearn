const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", () => {
  message.innerHTML = `Hello From Js`;
});
