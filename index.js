const path = require('path')
const fs = require('fs')

module.exports = {
  name: 'stats',
  middleware: function () {
    const verbose = this.query.verbose
    const compiler = this.get('compiler')
    if (compiler) {
      const arr = compiler._plugins.done
      const statsOpts = compiler.options.stats
      compiler._plugins.done = [
        function (stats) {
          if (verbose || stats.hasErrors()) {
            console.log(stats.toString(statsOpts || {colors: true}))
          }
          if (arr) {
            stats.toString = function () { return '' }
            arr.forEach(function (fn) {
              fn(stats)
            })
          }
        }
      ]
    }
    return function * (next) {
      yield next
    }
  }
}
