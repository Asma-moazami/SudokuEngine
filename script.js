
console.log("JavaScript is working!");

$(document).ready(function () {
$("#BS4").click(function () {
  $("#J4").slideUp(1500).slideDown(1500);
});
$("#BS6").click(function () {
  $("#J6").slideUp(1700).slideDown(1700);
});
$("#BS9").click(function () {
  $("#J9").slideUp(2000).slideDown(2000);
});



let currentIndex = 0;
let numbers;

$(document).on("dblclick", "input", function () {
  const tableId = $(this).closest("table").attr("id");

  let numbers;
  if (tableId === "table4x4") {
    numbers = [1, 2, 3, 4];
  } else if (tableId === "table6x6") {
    numbers = [1, 2, 3, 4, 5, 6];
  } else if (tableId === "table9x9") {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  const rowIndex = $(this).closest("tr").index();
  const colIndex = $(this).closest("td").index();


  let currentIndex = parseInt($(this).data("index")) || 0;

  const value = numbers[currentIndex];
  $(this).val(value);
  $(this).data("index", (currentIndex + 1) % numbers.length);

});



  $('#BTOOLS').click(function () {
    $("#NUMBERS, #TOOLSsEND").fadeToggle("slow");
    const currentText = $(this).text();
    $(this).text(currentText === "TOOLS" ? "CLOSE" : "TOOLS");
  });
});

var a;


function BTOOLS(){
  const container = document.getElementById("NUMBERS");
  container.innerHTML = "";
  for (let i = 0; i < 10; ++i) {
    if (i === 5) {
      const BR = document.createElement("br");
      container.appendChild(BR);
    }
    const BN = document.createElement("button");
    BN.textContent = i;
    BN.id = "BN" + i;
    BN.style.margin = "3px";
    BN.style.width = "25px";
    BN.style.height = "25px";
    BN.style.cursor = "pointer";
    BN.style.borderRadius = "100px";
    BN.className = "num";
    BN.setAttribute("draggable", "true");
    BN.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", BN.textContent);
    });
    container.appendChild(BN);
  }

  const container2 = document.getElementById("TOOLSsEND");
  container2.innerHTML = "";

  const SEND = document.createElement("button");
  SEND.textContent = "SEND";
  SEND.id = "SEND";
  SEND.style.float = "left";
  SEND.style.margin = "5px";
  SEND.className = "BSC";
SEND.onclick = function () {
  BSEND();
};


  container2.appendChild(SEND);


  const CLEAR = document.createElement("button");
  CLEAR.textContent = "CLEAR";
  CLEAR.id = "CLEAR";
  CLEAR.style.float = "left";
  CLEAR.style.margin = "5px";
  CLEAR.className = "BSC";
  CLEAR.onclick = function() {
  const inputs = document.querySelectorAll(`#table${a}x${a} input`);
  inputs.forEach(input => {
    if (!input.disabled) {
      input.value = "";

	input.style.backgroundColor = "#C9EEFF";
    }
  });


};

  container2.appendChild(CLEAR);
}
let puzzleIndex4 = 0;

const puzzles4 = [

  [
    [1, 0, 4, 0],
    [0, 3, 0, 2],
    [0, 1, 0, 4],
    [2, 0, 3, 0]
  ],
  

  [
    [0, 0, 3, 0],
    [3, 0, 0, 4],
    [0, 4, 0, 0],
    [1, 0, 0, 2]
  ],
  

  [
    [0, 0, 0, 0],
    [2, 0, 0, 4],
    [0, 3, 0, 0],
    [0, 0, 1, 0]
  ]
];


function BS4() {

  a=4;
  const H = document.getElementById("Header4");
  H.style.color = "white";
  document.getElementById("J6").style.display = "none";
  document.getElementById("J9").style.display = "none";
  const container = document.getElementById("J4");
  container.style.display = "block";
  container.innerHTML = "";

  const preset = puzzles4[puzzleIndex4];
  puzzleIndex4 = (puzzleIndex4 + 1) % puzzles4.length;

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";
table.id = "table4x4";


  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid white";
      cell.style.width = "40px";
      cell.style.height = "40px";
      cell.style.textAlign = "center";
      if (j % 2 === 0) cell.style.borderLeft = "5px solid #fff";
      if (i % 2 === 0) cell.style.borderTop = "5px solid #fff";

      const input = document.createElement("input");
      input.class = "input";
      input.type = "text";
      input.maxLength = 1;
      input.style.width = "100%";
      input.style.height = "100%";
      input.style.textAlign = "center";
      input.style.border = "none";
      input.style.backgroundColor = "#AEE2FF";
      input.style.color = "black";
      input.style.fontSize = "16px";
      input.style.border = "1px solid #FFFFFF";
      input.style.boxShadow = "inset 0 0 5px rgba(255,255,255,0.3), 0 0 5px rgba(0,0,0,0.1)";
      input.style.borderRadius = "8px";
       input.addEventListener("dragenter", function () {
        input.style.backgroundColor = "#EEE6FF";
      });
	input.addEventListener("dragleave", function () {
        input.style.backgroundColor = "#ACBCFF";
      });

      if (preset[i][j] !== 0) {
        input.value = preset[i][j];
        input.disabled = true;
	input.style.color = "gray";
        input.style.backgroundColor = "#CCC";
      }




      cell.appendChild(input);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}


let puzzleIndex6 = 0;
const puzzles6 = [[
    [5, 3, 0, 0, 0, 0],
    [6, 0, 0, 1, 0, 5],
    [0, 2, 4, 0, 0, 0],
    [3, 0, 0, 0, 6, 0],
    [0, 0, 0, 5, 0, 3],
    [4, 0, 0, 0, 2, 0],
  ],
  [
    [0, 0, 4, 0, 6, 0],
    [1, 0, 0, 0, 0, 5],
    [0, 5, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [3, 0, 0, 0, 0, 1],
    [0, 6, 0, 0, 4, 0],
  ],
  [
    [2, 0, 0, 0, 5, 0],
    [0, 4, 0, 0, 0, 6],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 3, 0, 0],
    [6, 0, 0, 0, 0, 2],
    [0, 5, 0, 0, 1, 0],
  ]
];

function BS6() {

  a=6;
  const H = document.getElementById("Header6");
  H.style.color = "white";
  document.getElementById("J4").style.display = "none";
  document.getElementById("J9").style.display = "none";
  const container = document.getElementById("J6");
  container.style.display = "block";
  container.innerHTML = "";

  const preset = puzzles6[puzzleIndex6];
  puzzleIndex6 = (puzzleIndex6 + 1) % puzzles6.length;

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";
table.id = "table6x6";


  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid white";
      cell.style.width = "40px";
      cell.style.height = "40px";
      cell.style.textAlign = "center";
      if (j % 2 === 0) cell.style.borderLeft = "5px solid #fff";
      if (i % 3 === 0) cell.style.borderTop = "5px solid #fff";


      const input = document.createElement("input");
      input.class = "input";
      input.type = "text";
      input.maxLength = 1;
      input.style.width = "100%";
      input.style.height = "100%";
      input.style.textAlign = "center";
      input.style.border = "none";
      input.style.backgroundColor = "#F0F2AC";
      input.style.color = "black";
      input.style.fontSize = "16px";
      input.style.border = "1px solid #FFFFFF";
      input.style.boxShadow = "inset 0 0 5px rgba(255,255,255,0.3), 0 0 5px rgba(0,0,0,0.1)";
      input.style.borderRadius = "8px";
       input.addEventListener("dragenter", function () {
        input.style.backgroundColor = "#EEE6FF";
      });
	input.addEventListener("dragleave", function () {
        input.style.backgroundColor = "#FFE194";
      });

      if (preset[i][j] !== 0) {
        input.value = preset[i][j];
        input.disabled = true;
	input.style.color = "gray";
        input.style.backgroundColor = "#CCC";
      }




      cell.appendChild(input);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}



let puzzleIndex = 0;

const puzzles = [
  [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ],
  [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
  ],
  [
    [0, 2, 0, 6, 0, 8, 0, 0, 0],
    [5, 8, 0, 0, 0, 9, 7, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0],
    [3, 7, 0, 0, 0, 0, 5, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 8, 0, 0, 0, 0, 1, 3],
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 9, 8, 0, 0, 0, 3, 6],
    [0, 0, 0, 3, 0, 6, 0, 9, 0]
  ]
];

function BS9() {
  a=9;
  const H = document.getElementById("Header9");
  H.style.color = "white";
  document.getElementById("J4").style.display = "none";
  document.getElementById("J6").style.display = "none";
  const container = document.getElementById("J9");
  container.style.display = "block";
  container.innerHTML = "";

  const preset = puzzles[puzzleIndex];
  puzzleIndex = (puzzleIndex + 1) % puzzles.length;

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.margin = "auto";
table.id = "table9x9";

  for (let i = 0; i < 9; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid white";
      cell.style.width = "40px";
      cell.style.height = "40px";
      cell.style.textAlign = "center";
      if (j % 3 === 0) cell.style.borderLeft = "5px solid #fff";
      if (i % 3 === 0) cell.style.borderTop = "5px solid #fff";

      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.style.width = "100%";
      input.style.height = "100%";
      input.style.textAlign = "center";
      input.style.border = "none";
      input.style.backgroundColor = "#C6FCE5";
      input.style.color = "black";
      input.style.fontSize = "16px";
      input.style.border = "1px solid #FFFFFF";
      input.style.boxShadow = "inset 0 0 5px rgba(255,255,255,0.3), 0 0 5px rgba(0,0,0,0.1)";
      input.style.borderRadius = "8px";
       input.addEventListener("dragenter", function () {
        input.style.backgroundColor = "#EEE6FF";
      });
	input.addEventListener("dragleave", function () {
        input.style.backgroundColor = "#88E0D0";
      });

      if (preset[i][j] !== 0) {
        input.value = preset[i][j];
        input.disabled = true;
	input.style.color = "gray";
        input.style.backgroundColor = "#CCC";
      }

      cell.appendChild(input);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}

/*
function saveInputs(a) {
  const values = [];
  const inputs = document.querySelectorAll(`#table${a}x${a} input`);
  inputs.forEach(input => {
    values.push(Number(input.value.trim()));
  });
  console.table(values);
  console.log("مقدارهای ذخیره‌شده:", values);
  return values;
}
*/


function BHELP() {
  const parag = document.getElementById("J2");
  parag.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.textContent = ".........HELP........";
  parag.appendChild(paragraph);
}





function BSEND(){
  const tableId = `table${a}x${a}`;
  const rows = document.querySelectorAll(`#${tableId} tr`);
  let isValid = true;

  for (let i = 0; i < a; i++) {
    let rowSet = new Set();
    let colSet = new Set();

    for (let j = 0; j < a; j++) {
      const rowInput = rows[i].querySelectorAll("input")[j];
      const colInput = rows[j].querySelectorAll("input")[i];

      const rowVal = rowInput.value;
      const colVal = colInput.value;

      if (rowVal) {
        if (rowSet.has(rowVal)) {
          rowInput.style.backgroundColor = "#FFBBBB";
          isValid = false;
        }
        rowSet.add(rowVal);
      }

      if (colVal) {
        if (colSet.has(colVal)) {
          colInput.style.backgroundColor = "#BBFFBB";
          isValid = false;
        }
        colSet.add(colVal);
      }
    }
  }

  const msg = document.getElementById("J2"); // محل نمایش پیام
  msg.innerHTML = "";
  msg.textContent = isValid ? "✅ جدول درست است." : "❌ جدول شامل اشتباه است / تکمیل نشده است";

}


