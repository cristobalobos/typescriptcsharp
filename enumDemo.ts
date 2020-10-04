function enumDemo() {
  enum temperature {
    cold,
    hot,
  }

  let temp = temperature.cold;

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
