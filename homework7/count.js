function count(list) 
{
    return list.reduce((cmap, word) => {
      cmap[word] = (cmap[word] || 0) + 1;
      return cmap;
    }, {});
}
  

var list = ['a', 'dog', 'chase', 'a', 'cat']
var cmap = count(list)
console.log(cmap)
