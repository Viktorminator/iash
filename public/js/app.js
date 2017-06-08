createParticles: function () {                                                                                       // 124
    function createParticles() {                                                                                       // 3
        var step = 0;                                                                                                    // 125
                                                                                                                         //
        for (var _iterator = this.emitters(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;                                                                                                      // 127
                                                                                                                           //
            if (_isArray) {                                                                                                // 127
                if (_i >= _iterator.length) break;                                                                           // 127
                _ref = _iterator[_i++];                                                                                      // 127
            } else {                                                                                                       // 127
                _i = _iterator.next();                                                                                       // 127
                if (_i.done) break;                                                                                          // 127
                _ref = _i.value;                                                                                             // 127
            }                                                                                                              // 127
                                                                                                                           //
            var emitter = _ref;                                                                                            // 127
                                                                                                                           //
            var particleStep = this.duration / emitter.particles;                                                          // 128
            for (var i = 0; i < emitter.particles; i++) {                                                                  // 129
                //
                var smokeImages = ['/images/smoke-9.png', '/images/smoke-9-2.png', '/images/smokes/3.png', '/images/smokes/3.1.png', '/images/smokes/3.5.png'];
                //
                var imageNumber = Math.round(Math.random() * (smokeImages.length - 1));                                      // 139
                var smokeImage = smokeImages[3];                                                                             // 140
                var particle = new PIXI.Sprite.fromImage(smokeImage);                                                        // 141
                                                                                                                             //
                var difference = Math.floor(Math.random() * .02) + -.01;                                                     // 143
                particle.x = emitter.x + difference;                                                                         // 144
                particle.y = emitter.y + difference;                                                                         // 145
                particle.x = particle.y = 0;                                                                                 // 146
                particle.emitter = $.extend(true, {}, emitter);                                                              // 147
                                                                                                                             //
                for (var _iterator2 = particle.emitter.bezier, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                    var _ref2;                                                                                                 // 149
                                                                                                                               //
                    if (_isArray2) {                                                                                           // 149
                        if (_i2 >= _iterator2.length) break;                                                                     // 149
                        _ref2 = _iterator2[_i2++];                                                                               // 149
                    } else {                                                                                                   // 149
                        _i2 = _iterator2.next();                                                                                 // 149
                        if (_i2.done) break;                                                                                     // 149
                        _ref2 = _i2.value;                                                                                       // 149
                    }                                                                                                          // 149
                                                                                                                               //
                    var point = _ref2;                                                                                         // 149
                                                                                                                               //
                    point.x += difference;                                                                                     // 150
                    point.y += difference;                                                                                     // 151
                }                                                                                                            // 152
                                                                                                                             //
                particle.height = PARTICLE_SIZE;                                                                             // 154
                particle.width = PARTICLE_SIZE;                                                                              // 155
                                                                                                                             //
                particle.velocity = { x: 0, y: 0 };                                                                          // 157
                particle.alpha = 0.1;                                                                                        // 158
                if (this.props.buildUp) {                                                                                    // 159
                    particle.progress = i / emitter.particles + Math.random() * .0001 - 0.75;                                  // 160
                } else {                                                                                                     // 161
                    particle.progress = i / emitter.particles + Math.random() * .0001;                                         // 162
                }                                                                                                            // 163
                                                                                                                             //
                particle.delay = i * particleStep;                                                                           // 165
                particle.anchor.x = 0.5;                                                                                     // 166
                particle.anchor.y = 0.5;                                                                                     // 167
                particle.rotation = Math.random() * 360;                                                                     // 168
                                                                                                                             //
                particle.rotationIncrement = 0.001 + Math.random() * .001;                                                   // 170
                                                                                                                             //
                if (Math.random() > .5) {                                                                                    // 172
                    particle.rotationIncrement *= -1;                                                                          // 173
                }                                                                                                            // 174
                                                                                                                             //
                this.particles.push(particle);                                                                               // 176
                this.stage.addChild(particle);                                                                               // 177
            }                                                                                                              // 178
                                                                                                                           //
            step++;                                                                                                        // 180
        }                                                                                                                // 181
        this.renderer.render(this.stage);                                                                                // 182
    }                                                                                                                  // 183
                                                                                                                       //
    return createParticles;                                                                                            // 3
}(),                                                                                                                 // 3
    startLoop: function () {                                                                                             // 185
    function startLoop() {                                                                                             // 3
        this.stopLoop();                                                                                                 // 186
        if (!this.animationFrame) {                                                                                      // 187
            this.animationFrame = ibAnimationFrame.add(this.draw, this, 'Smoke');                                          // 188
        }                                                                                                                // 189
    }                                                                                                                  // 190
                                                                                                                       //
    return startLoop;                                                                                                  // 3
}(),                                                                                                                 // 3
    stopLoop: function () {                                                                                              // 192
    function stopLoop() {                                                                                              // 3
        ibAnimationFrame.remove(this.animationFrame);                                                                    // 193
        this.animationFrame = null;                                                                                      // 194
    }                                                                                                                  // 195
                                                                                                                       //
    return stopLoop;                                                                                                   // 3
}();