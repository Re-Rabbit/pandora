'use strict'

const gulp        = require('gulp')
//const sass        = require('gulp-sass')
const nunjucks    = require('gulp-nunjucks-render')
const data        = require('gulp-data')
const tool        = require('gulp-util')
const Nunjucks    = require('nunjucks')
const named       = require('vinyl-named')
const webpack     = require('webpack-stream')
const webpack1    = require('webpack')
const del         = require('del')
const bs          = require('browser-sync').create()
const path        = require('path')
const fs          = require('fs')
const chalk       = require('chalk')
const express     = require('express')
const morgan      = require('morgan')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const compression = require('compression')
const cache       = require('gulp-memory-cache')
const EventEmitter = require('events')
const stylus = require('gulp-stylus')


/**
 * Paths
 */

// src
const pages      = 'pages'
const components = 'components'
const libs       = 'libs'
const tmp        = '.tmp'


const paths = [ pages, components, libs ]

const ignorename = '[^_\.#~]'
const ignorelibname = '[^\.#~]'

const buildList = {}

function sassConfig() {
    return {
	outputStyle: 'expanded',
	indentType: 'space',
	includePaths: paths
    }
}

function replaceComponentPathForStylus(render) {
    render.str = render.str.replace(/[\"|\']@(\w+)[\"|\']/, '\"$1/index\"')
    return
}



function stylusOptions() {
    return {
	include: paths.map(n => path.resolve(n)),
	use: replaceComponentPathForStylus
    }
}



function css(done) {

    return gulp.src(`${pages}/**/${ignorename}*.styl`, {base: pages,
							allowEmpty: true,
							since: gulp.lastRun('default')})
    /*
	.pipe(sass(sassConfig()).on('error', function(err) {
	    sass.logError.bind(this)(err)
	    this.emit('end')
	}))
    */
	.pipe(stylus(stylusOptions()))
	.pipe(gulp.dest(tmp))
}

function css1(done) {
    var bp = Object.keys(buildList)
    console.log(bp)
    if(!bp.length) return done()
    return gulp.src(bp, {base: pages,
			 allowEmpty: true,
			 since: gulp.lastRun('default')})
	.pipe(sass(sassConfig()).on('error', function(err) {
	    sass.logError.bind(this)(err)
	    this.emit('end')
	}))
	.pipe(gulp.dest(tmp))
}



/**
 * clean template
 */ 
function clean(done) {
    return del(`${tmp}/*`, done)
}

/**
 * Default task.
 */

function main() {
    
    gulp.task('default', gulp.series(
	clean,
	css
    ))

    gulp.watch(`${pages}/**/${ignorename}*.scss`, gulp.series(css))
	.on('change', function(path) {
	    console.log(path)
	    buildList[path] = null
	})
    gulp.watch(`${libs}/**/${ignorelibname}*.scss`, gulp.series(css1))
	.on('change', function(path) {
	    console.log(path)
	})    
    
    //gulp.on('stop', console.log)
}





main(' Gulp init here ')

// code end here
