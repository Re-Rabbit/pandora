const sass = require('node-sass')
const fs = require('fs')
const path = require('path')

sass.render({
    //file: './components/example/_index',
    data: `
@import "component:example";
@import "component:example";
@import "../components/scss_modules/*";

.text { color: 1}
`,
    importer: function(url, prev, done) {
	console.log(this.options.includePaths)
	var test = path.resolve(__dirname, '../', url.replace(/component:(\w+)/, 'components/$1/_index') + '.scss')
	console.log(test)
	console.log(prev)
	
	return done({
	    content: fs.readFileSync(test, 'utf-8')
	})
    }
}, (err, result) => {
    if(err) return console.log(err)
    console.log(result.css.toString())
    //console.log(result.stats)
})
