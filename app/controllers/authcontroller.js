const exportRoutes = module.exports = {}

exportRoutes.docsignup = function(req, res) {
  res.render('docsignup');
}
exportRoutes.pharmsignup = function(req, res) {
  res.render('pharmsignup');
}
