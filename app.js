(function () {
  "use strict";

  var STORAGE_KEY = "flight-review-draft";

  var fields = {
    date: document.getElementById("date"),
    location: document.getElementById("location"),
    aircraft: document.getElementById("aircraft"),
    purpose: document.getElementById("purpose"),
    wentWell: document.getElementById("went-well"),
    observations: document.getElementById("observations"),
    nextTime: document.getElementById("next-time"),
    stockFootage: document.getElementById("stock-footage"),
    freeNotes: document.getElementById("free-notes")
  };

  var printTargets = {
    date: document.getElementById("print-date"),
    location: document.getElementById("print-location"),
    aircraft: document.getElementById("print-aircraft"),
    purpose: document.getElementById("print-purpose"),
    wentWell: document.getElementById("print-went-well"),
    observations: document.getElementById("print-observations"),
    nextTime: document.getElementById("print-next-time"),
    stockFootage: document.getElementById("print-stock-footage"),
    freeNotes: document.getElementById("print-free-notes")
  };

  var printDateDisplay = document.getElementById("print-date-display");
  var printBtn = document.getElementById("print-btn");
  var saveTimer = null;

 function formatDateForDisplay(dateValue) {
  if (!dateValue) return "";

  var parts = dateValue.split(/[-/]/);

  if (parts.length !== 3) return dateValue;

  return (
    parts[0] +
    "年" +
    Number(parts[1]) +
    "月" +
    Number(parts[2]) +
    "日"
  );
}

function formatDateInput(value) {
  var numbers = value.replace(/\D/g, "").slice(0, 8);

  if (numbers.length <= 4) {
    return numbers;
  }

  if (numbers.length <= 6) {
    return numbers.slice(0, 4) + "/" + numbers.slice(4);
  }

  return (
    numbers.slice(0, 4) +
    "/" +
    numbers.slice(4, 6) +
    "/" +
    numbers.slice(6)
  );
}

fields.date.addEventListener("input", function () {
  fields.date.value = formatDateInput(fields.date.value);
});


  function setTodayIfEmpty() {
    if (!fields.date.value) {
      var today = new Date();
      var y = today.getFullYear();
      var m = String(today.getMonth() + 1).padStart(2, "0");
      var d = String(today.getDate()).padStart(2, "0");
      fields.date.value = y + "/" + m + "/" + d;
    }
  }

  function saveForm() {
    var data = {};
    Object.keys(fields).forEach(function (key) {
      data[key] = fields[key].value;
    });

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      /* storage full or unavailable */
    }
  }

  function loadForm() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;

      var data = JSON.parse(raw);
      Object.keys(fields).forEach(function (key) {
        if (typeof data[key] === "string") {
          fields[key].value = data[key];
        }
      });
      return true;
    } catch (err) {
      return false;
    }
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveForm, 300);
  }

  function syncPrintView() {
    var dateFormatted = formatDateForDisplay(fields.date.value);

    printTargets.date.textContent = dateFormatted || "—";
    printTargets.location.textContent = fields.location.value.trim() || "—";
    printTargets.aircraft.textContent = fields.aircraft.value.trim() || "—";
    printTargets.purpose.textContent = fields.purpose.value.trim() || "—";
    printTargets.wentWell.textContent = fields.wentWell.value.trim();
    printTargets.observations.textContent = fields.observations.value.trim();
    printTargets.nextTime.textContent = fields.nextTime.value.trim();
    printTargets.stockFootage.textContent = fields.stockFootage.value.trim();
    printTargets.freeNotes.textContent = fields.freeNotes.value.trim();

    printDateDisplay.textContent = dateFormatted
      ? "記録日：" + dateFormatted
      : "";
  }

  printBtn.addEventListener("click", function () {
    syncPrintView();
    window.print();
  });

  Object.keys(fields).forEach(function (key) {
    var el = fields[key];
    el.addEventListener("input", scheduleSave);
    el.addEventListener("change", scheduleSave);
  });

  if (!loadForm()) {
    setTodayIfEmpty();
  } else if (!fields.date.value) {
    setTodayIfEmpty();
  }
})();
