// https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

function spongeMeme(sentence) {
  let res = '';
  for (i = 0; i < sentence.length; i++){
     res += (i % 2) ? sentence[i].toLowerCase() : sentence[i].toUpperCase();
  }
  return res;
}