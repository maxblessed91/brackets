module.exports = function check(str, bracketsConfig) {
  if (str.length === 0 || undefined)

    return true; // проверка на пустую строку, если выполняется то true, т.к. она равна самой себе

    if (str.length % 2 !== 0)

   return false;	// проверка на четность, если не выполняется то false, т.к. если нечетная то скобки несбалансированы

  let open = "", close = "", stack = [str[0]]; // сразу записать в стэк первый символ с 0м индексом
  for (let el of bracketsConfig) { open += el[0]; close += el[1]; } // взять открывающиеся и закрывающиеся скобки у bracketsConfig

  // пройтись по строке с 1-го индекса(т.к. 0й мы уже записали) и проверить каждый символ
  for (let i = 1; i < str.length; i++) {
    let curBracket = str[i], lastBracket = stack[stack.length - 1]; // проверка на закрывающуюся скобку и чтобы она соответствовала открывающейся
    if (close.includes(curBracket) && close.indexOf(curBracket) == open.indexOf(lastBracket)) {
      stack.pop()
    } else stack.push(curBracket); // иначе положить непарную скобку в стэк
  }

  return stack.length === 0;   // проверка на дисбаланс открытых и закрытых скобок
}
