/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/

const paths: any = {
    'npm': 'node_modules/',
    'vendor': 'dist/vendor'
};

/** Map relative paths to URLs. */
const map: any = {
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
const packages: any = {
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
// put the names of any of your Material components here
// const materialPkgs: string[] = [
//     'core',
//     'tooltip'
// ];

// materialPkgs.forEach((pkg) => {
//     packages[`@angular2-material/${pkg}`] = { main: `${pkg}.js`};
// });

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
    map: map,
    packages: packages
});

// Apply the user's configuration.
System.config({ map, packages });