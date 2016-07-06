var glob = require("glob")
var fs = require("fs")
var path = require("path")

const entry_patt = "script/**/*.js"
const paths = [
    "."
]


function get_entries(entry_patt){
    return glob.sync(entry_patt)
}

function get_dep(file_name){
    const f = fs.readFileSync(file_name, {encoding:"utf-8"})
    const lines = f.split('\n').map(s => s.replace(/(^\s*)|(\s*$)/g, ""))
    var ret = []
    lines.forEach(function(line){
        const m = line.match(/^[^\/]*=.*require\(\"(.*)\"\)/)
        if(m) { ret = ret.concat(m[1])}
    })
    return ret
}

function locate_in_paths(dest_name, file_name, paths){
    function try_path(p){
        function f(p){
            try{
                fs.accessSync(p, fs.R_OK)
            }
            catch(e){
                return void 0
            }
            return p
        }
        return f(p) || f(p+".js")
    }

    if(file_name){
        const file_path = path.dirname(file_name)
        const p = try_path(path.join(file_path, dest_name))
        if(p) { return p }
    }
    paths.forEach(function(i){
        const p = try_path(path.join(i, dest_name))
        if(p) { return p }
    })
    return void 0
}

function get_all_dep(entry_patt, paths){
    const entries = get_entries(entry_patt)
    var ret = {}
    entries.forEach(file_name => {
        ret[file_name] = get_dep(file_name).map(dep => {
            return locate_in_paths(dep, file_name, paths) || "global[\""+dep+"\"]"
        })
    })
    return ret
}

function reverse_dep(dep_dict){
    var ret = {}
    function append_ret(k, v){
        var l = ret[k] || new Set()
        l.add(v)
        ret[k] = l
    }
    for (var k in dep_dict) {
        dep_dict[k].forEach(i => {
            append_ret(i, k)
        })
    }
    var ret2 = {}
    for (var k in ret) {
        ret2[k] = Array.from(ret[k])
    }
    return ret2
}

//get_entries(entry_patt)
//console.log(locate_in_paths("tab", "pages/ysd/", paths))

//const file_path = path.dirname(file_name)
//get_dep("script/dep.js")
console.log(get_all_dep(entry_patt, paths))
console.log(reverse_dep(get_all_dep(entry_patt, paths)))
