const { src, dest, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const concat = require('gulp-concat');

const bundleJs = () => {
    return src('./Source/Scripts/**/*.js')
        .pipe(minifyJs())
        .pipe(concat('bundle.js'))
        .pipe(dest('./Assets/Scripts/'));
}

const devWatch = () => {
    watch('./Source/Scripts/**/*.js', bundleJs);
}

exports.bundleJs = bundleJs;
exports.devWatch = devWatch;