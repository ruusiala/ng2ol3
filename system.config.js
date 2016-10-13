/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
var paths = {
    'npm': 'node_modules/',
    'vendor': 'dist/vendor'
};
/** Map relative paths to URLs. */
var map = {
    'app': 'app',
    // angular bundles
    '@angular/core': paths.npm + '@angular/core/bundles/core.umd.js',
    '@angular/common': paths.npm + '@angular/common/bundles/common.umd.js',
    '@angular/compiler': paths.npm + '@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': paths.npm + '@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': paths.npm + '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': paths.npm + '@angular/http/bundles/http.umd.js',
    '@angular/router': paths.npm + '@angular/router/bundles/router.umd.js',
    '@angular/forms': paths.npm + '@angular/forms/bundles/forms.umd.js',
    '@angular/material': paths.npm + "@angular/material/material.umd.js",
    // other libraries
    'rxjs': paths.npm + 'rxjs',
    'angular2-in-memory-web-api': paths.npm + 'angular2-in-memory-web-api'
};
/** User packages configuration. */
var packages = {
    'app': {
        main: './main.js',
        defaultExtension: 'js'
    },
    'rxjs': {
        defaultExtension: 'js'
    },
    'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
    }
};
// Apply the CLI SystemJS configuration.
System.config({
    map: map,
    packages: packages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system.config.js.map