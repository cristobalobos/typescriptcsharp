function enumDemo() {
    var temperature;
    (function (temperature) {
        temperature[temperature["cold"] = 0] = "cold";
        temperature[temperature["hot"] = 1] = "hot";
    })(temperature || (temperature = {}));
    var temp = temperature.cold;
    switch (temp) {
        case temperature.cold:
            console.log("Brrr...");
            break;
        /* El tipo 'temperature.hot' no se puede comparar con el tipo 'temperature.cold'.ts(2678)
          case temperature.hot:
          console.log("yikes!");
          break;*/
    }
}
enumDemo();
