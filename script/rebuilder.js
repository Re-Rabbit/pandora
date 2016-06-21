import gulp from 'gulp'
import path from 'path'

const src  = 'src'
const lib  = 'lib'
const tmp  = '.tmp'
const dist = '.dist'

const paths = [ src, lib ].map(n => path.resolve(n))

const ignorename = '[^_\.#~]'
const ignorelibname = '[^\.#~]'

const buildList = {}



const main = do {
    gulp.task('default', function(done) { done() })
}

