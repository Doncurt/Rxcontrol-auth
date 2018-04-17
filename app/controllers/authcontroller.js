const exportRoutes = module.exports = {}

exportRoutes.docsignup = function(req, res) {
  res.render('docsignup');
}
exportRoutes.pharmsignup = function(req, res) {
  res.render('pharmsignup');
}

exportRoutes.pharmlogin=function(req,res){
  res.render('pharmlogin')
}

exportRoutes.doclogin=function(req,res){
  res.render('doclogin')
}
