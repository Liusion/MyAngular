/**
 * Created by liusion on 17-4-15.
 */
module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'jasmine'],
        files: [
            'src/**/*.js',
            'test/**/*_spec.js'
        ],
        preprocessors: {
            'test/**/*.js': ['jshint', 'browserify'],
            'src/**/*.js': ['jshint', 'browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
            debug: true,

        }
    })
}