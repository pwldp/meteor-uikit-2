Package.describe({
  summary: "A lightweight and modular front-end framework."
});

Package.on_use(function (api, where) {
  
  var path = Npm.require('path');
  
  var asset_path = path.join('uikit-2');
  
  //js
  api.add_files(path.join(asset_path, 'js', 'uikit.js'), 'client');
  
  //css
  api.add_files(path.join(asset_path, 'css', 'uikit.css'), 'client');

  //fonts
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'FontAwesome.otf'), 'client');

});
