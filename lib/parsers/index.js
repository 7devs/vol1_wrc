module.exports = function(data){
var msgType =data.msgtype;
var reContent;

switch(msgType){
  case 'text':
  reContent = require('./text-parser.js')(data.content);
  break;
  case 'voice':
  /*开通语音识别功能，用户每次发送语音给公众号时，微信会在推送的语音消息XML数据包中，
  增加一个Recongnition字段。*/
  reContent = require('./voice-parser.js')(data.recognition);
  break;
  case 'event':
reContent = require ('./event-parser.js')(data);
  break;
  case 'video':
  break;
  case 'location':
  break;
  case 'shortvideo':
    break;

    default:
    reContent='I have no idea.';
    break;
}

  return reContent;
}
