(function() {
  window.addEventListener("load", function () {
    this.document.getElementById("load-time").innerHTML =
      "Page load time is " +
      (this.performance.now() / 1000).toFixed(3) +
      " seconds";
  });
})();
