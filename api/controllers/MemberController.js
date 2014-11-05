/**
 * MemberController
 *
 * @description :: Server-side logic for managing members
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  welcome:function(req,res){
    
    var strategies = sails.config.passport
      , providers  = {};

    // Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach(function (key) {
      if (key === 'local') {
        return;
      }

      providers[key] = {
        name: strategies[key].name
      , slug: key
      };
    });
    
    
    res.view({
      providers : providers
    , errors    : req.flash('error')
    });
    console.log(req.user);
  },
  
  logout:function(req,res){
    req.logout();
  },
  
};

