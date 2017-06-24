const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    var inputs = [
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000000',
        'ITEM000001',
        'ITEM000001',
        'ITEM000004'
    ];
    var item = new loadAllItems();
    var actualText = function printInventory(inputs) {
        var textHead = '***<没钱赚商店>购物清单***\n';
        var textBody = "";
        var line = '----------------------\n';
        var textEnd = '**********************';
        var text = "";
        var num = 0;
        var total = 0;
        var temp = 0;
        for(var i=0;i<6;i++) {
          for(var j=temp;j<inputs.length;i++){
            while (inputs[j] == item[i].barcode) {
              j++;
              num++;
            }
            if(num!=0){
              var sum = num * item[i].price;
              total += sum;
              textBody += "名称：" + item[i].name + "，数量：" +
              num + item[i].unit + "，单价：" + item[i].price.toFixed(2) +
              "(元)，小计：" + sum.toFixed(2) + "(元)\n";
            }
            num = 0;
            temp=j;
          }
      }
        text += textHead + textBody + line + "总计：" + total.toFixed(2) + "(元)\n" + textEnd;
        return text;
    };
    console.log(actualText(inputs));
    return actualText(inputs);
};
