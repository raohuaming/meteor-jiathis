// Write your tests here!
// Here is an example.
if ( Meteor.isClient) {
  Tinytest.add('Template jiathisShareButton set uid correctly', function (test) {
    var div = document.createElement('div');
    var uid = 12345678;
    Blaze.renderWithData(Template.jiathisShareButton, { uid: uid }, div);
    test.equal($(div).find('.jiathis').attr('href'), "http://www.jiathis.com/share?uid=" + uid );
  });
}
