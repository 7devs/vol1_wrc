

// 文本消息解析

module.exports = function(content){

  var reContent;

  switch(content){
    case'1':
    reContent ='111';
    break;
    case'2':
    reContent ='222';
    break;

    default:
    reContent ='I love you.';

  }

  return reContent;
}
