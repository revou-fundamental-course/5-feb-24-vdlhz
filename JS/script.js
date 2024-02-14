document.getElementById("convertBtn").addEventListener("click", function() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
  });
  