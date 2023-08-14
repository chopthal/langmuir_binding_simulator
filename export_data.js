exportBtn = document.querySelector(".exportBtn");

exportBtn.addEventListener("click", exportBtnClickEvent);

function exportBtnClickEvent() {
  const saveData = document.querySelector(".assoStart").value;
  const blob = new Blob([saveData], { type: "text/plain;charset=utf-8" });
  console.log(blob);
}
