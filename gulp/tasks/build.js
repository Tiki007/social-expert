import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import electronConfig from '../../webpack/electron.config';

const build = (config, callback) => {
  let myConfig = Object.create(config);
  webpack(myConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    callback();
  });
};

gulp.task('webpack:build:electron', (callback) => {
  build(electronConfig, callback);
});
