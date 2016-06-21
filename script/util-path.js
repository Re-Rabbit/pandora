/**
 * Path utils
 *
 * @version 1.0
 * @author Rabbit
 *
 * 用于操作路径
 */

/*
## link
https://github.com/roots/sage/pull/1433
https://github.com/roots/sage/issues/1484
https://discourse.roots.io/t/need-to-speed-up-scripts-task/3727
*/

const path = require('path')

function defineGulpEntryPath() {
    
}

function pickFileTypeFromPath() {
    
}

function pickWorkSpaceFromPath() {
    
}


/**
 * Transform custom component path.
 * 
 * @param {Stylus Render}
 * @return {Void}
 */
function transformComponentPathForStylus(render) {
    render.str = render.str.replace(/[\"|\']@(\w+)[\"|\']/, '\"$1/index\"')
}
