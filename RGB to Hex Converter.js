const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hexNumber = []

function RGBelement() {
  let R = document.querySelector('.inR').value
  console.log(R)
  let G = document.querySelector('.inG').value
  console.log(G)
  let B = document.querySelector('.inB').value
  console.log(B)

  function convert(decimal) {
    let a = parseInt(decimal / 16)  //先除一遍用parseInt取整數，捨去小數

    //decimal 2 hex 參考資料 >>> https://www.footmark.info/introduction-to-computer/digital-system-conversion/#fm-chapter-3-3-1
    let b = decimal % 16
    while (a !== 0) {
      let HEXword = HEX[b]
      hexNumber.unshift(HEXword)  //推進陣列
      b = a % 16  //b要放前面否則a先被洗掉之後丟給b那b是錯誤的
      a = parseInt(a / 16)
      if (a === 0) {              //若a為零還要再輸出一次餘數，否則會少輸出一個
        HEXword = HEX[b]
        hexNumber.unshift(HEXword)
      }
    }
    return hexNumber
  }
  const rBox = document.querySelector('.rBox')
  const gBox = document.querySelector('.gBox')
  const bBox = document.querySelector('.bBox')
  rBox.style.backgroundColor = `rgb(${R},0,0)`
  gBox.style.backgroundColor = `rgb(0,${G},0)`
  bBox.style.backgroundColor = `rgb(0,0,${B})`
  const colorbox = document.querySelector('.color')
  colorbox.style.backgroundColor = `rgb(${R},${G},${B})`

  convert(B)  //先將B推進陣列
  convert(G)  //再將G推進陣列
  convert(R)  //再將R推進陣列
  $('.hex-num').html(`#${hexNumber[0]}${hexNumber[1]}${hexNumber[2]}${hexNumber[3]}${hexNumber[4]}${hexNumber[5]}`)


  //後續會用到清掉陣列內容以便下一個數字轉換後可填入
  hexNumber.splice(0, hexNumber.length)
  console.log(hexNumber)
}

