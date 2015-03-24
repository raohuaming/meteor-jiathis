Template.jiathisShareButton.rendered = function(){
  var script_tag = _.template('<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=<%= uid %>" charset="utf-8"></script>')({
    uid: this.data.uid
  });
  $('.jiathis_style').after(script_tag);
};

Template.jiathisShareButton.helpers({
  uid: function(){
    return Template.instance().data.uid
  }
});
