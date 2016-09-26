var router = require('express').Router(),
xml = require('xml'),
parser = require('../parsers'), //引入parsers文件夹的解析器，默认主文件为index.js
xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
.post(xmlBodyParser({
  explicitArray:false
}),function(req,res,next){
  var data = req.body.xml;
  var reContent = parser(data);///关键语句

//TODO:xxxx
res.append('Content-Type','text/xml');
res.send(xml({
  xml:[
    {ToUserName:{_cdata:data.fromusername}},
    {FromUserName:{_cdata:data.tousername}},
    {CreateTime:+new Date()},//+号转字符型
    {MsgType:{_cdata:'text'}},
    {Content:{_cdata:reContent}}//关键语句
  ]
}));

})
.get(function(req,res,next){
  var str = req.query.echostr;
  res.send(str);

});

module.exports=router;
