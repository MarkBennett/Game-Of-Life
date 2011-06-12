spawn = require('child_process').spawn
to_stdio = (emitter) ->
  emitter.stdout.on 'data', (data) -> process.stdout.write data
  emitter.stderr.on 'data', (data) -> process.stderr.write data
  emitter

task "watch:coffee", "Watch for changes to CoffeeScript files in /src and rebuild automatically", ->
  to_stdio spawn "coffee", ["-c", "-w", "src/"]
