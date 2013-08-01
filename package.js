Package.describe({
  summary: "A lightweight and modular front-end framework."
});

Package.on_use(function (api, where) {
  
  var path = Npm.require('path');
  
  var asset_path = path.join('uikit');
  
  //js
  api.add_files(path.join(asset_path, 'js', 'uikit.min.js'), 'client');
  
  //css
  api.add_files(path.join(asset_path, 'css', 'uikit.min.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'uikit.almost-flat.min.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'uikit.gradient.min.css'), 'client');
  
  //fonts
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'FontAwesome.otf'), 'client');

});