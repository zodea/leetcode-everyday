function toThousands(number) {
  const num = parseFloat(number.toFixed(3))
  let [integer] = String.prototype.split.call(num, '.')
  // 使用 x(?=y) 先行断言结合 $& 整个用于匹配的原字符串
  integer = integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  console.log(integer)
  return integer
}

toThousands(1155213123.2)
