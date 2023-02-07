function gemsToDiamond(a, b, c){
    
    let first = a * 21;
    let second = b * 32;
    let third = c * 43;
    let totalDiamond = first + second + third;
    if (totalDiamond < 2000) {
      return totalDiamond;
    } else {
      let getDiamond = totalDiamond - 2000;
      return getDiamond;
    }
  }

  const result = gemsToDiamond(10, 20, 30);
  console.log(result);