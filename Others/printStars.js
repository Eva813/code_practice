function fnDrawTriange(n) {
  for (let i = 0; i < n; i++) {
    let star = "";
    for (let j = 0; j < 2 * i + 1; j++) {
      star += "*";
    }
    let space = "";
    for (let j = 0; j < n - 1 - i; j++) {
      space += " ";
    }
    console.log(space + star);
  }
}

fnDrawTriange(5)
