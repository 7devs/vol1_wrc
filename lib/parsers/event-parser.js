module.exports = function(event,eventKey){
var reContent;

switch (event.toLowerCase()) {
  case 'click':
  switch (eventKey) {
    case 'menu1':
      reContent = 'menu1 clicked.';
      break;

      case 'menu2':
        reContent = 'menu2 clicked.';
        wechat.sendByTemplate(data.fromusername,conf.webchat.template.test,{content:
          {
            color:'#ff0000',
            value:'测试内容。'
          }})；
        break;
    default:
reContent = '...';
  }

    break;
  default:
reContent = event;
break;
}
return reContent;
}
