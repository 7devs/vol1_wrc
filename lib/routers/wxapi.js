var router = require('express').Router(),
xml = require('xml'),
parser = require('../parsers'), //引入parsers文件夹的解析器，默认主文件为index.js
xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
.post(xmlBodyParser({explicitArray:false}),
function(req,res,next){
  var data = req.body.xml;
  var reContent = parser(data);///关键语句

//TODO:xxxx
res.append('Content-Type','text/xml');

//发送被动响应消息
res.send(xml({
  xml:[
    {ToUserName:{_cdata:data.fromusername}},//接收方帐号（收到的OpenID）
    {FromUserName:{_cdata:data.tousername}},//开发者微信号
    {CreateTime:+new Date()},//+号转字符型?//消息创建时间 （整型）
    {MsgType:{_cdata:'text'}},
    {Content:{_cdata:reContent}}//关键语句,回复的消息内容,实际为parser(data)
  ]
}));
})
.get(function(req,res,next){
  var str = req.query.echostr;
  res.send(str);

});

module.exports=router;
