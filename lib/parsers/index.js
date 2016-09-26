module.exports = function(data){

var msgType =data.msgtype;

var reContent;

switch(msgType){
  case 'text':
  reContent = require('./text-parser.js')(data.content);
  break;
  case 'voice':
  reContent = require('./voice-parser.js')(data.recognition);
  break;
  case 'event':
reContent = require ('./event-parser.js')(data.event,data.eventkey);
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
