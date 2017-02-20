export default {
  entry: 'dist/ng2-image-gallery.js',
  dest: 'dist/bundles/ng2-image-gallery.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2-image-gallery',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/material': 'ng.material',
    'rxjs': 'Rx'
  }
}