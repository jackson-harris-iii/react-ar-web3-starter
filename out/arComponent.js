AFRAME.registerComponent('spotxcomponent', {
  addCoins(level) {
    if (level > 3) {
      return;
    }

    let world = this.state;
    let lvl = this.state.level[level];

    while (lvl.round_coins > 0) {
      // Game Updates.
      this.gameUpdate();

      lvl.round_coins -= 1; // Take Away from total pool of coins
      world.coins_on_ground += 1; // Put coin on ground

      setTimeout(() => {
        var livespawn = true;

        const randomYRotation = Math.random() * 360; // Random starting rotation
        const Xangle = 90;
        var randomXRotation = Xangle;

        const newX =
          world.mine.x + Math.random() * (2 * lvl.distance) - lvl.distance; // Random x ( left / Right ) direction
        const newZ =
          world.mine.z + Math.random() * (2 * lvl.distance) - lvl.distance; // Random y ( back / Forward ) direction

        if (world.coin.extra_rotation) {
          randomXRotation = Math.random() * Xangle;
        }

        const hitbox = document.createElement('a-entity');

        const geometry = `primitive: sphere; radius: ${world.coin.hitbox_radius}`;
        var material = '';
        if (world.debug) {
          material = 'color:#EF2D5E;transparent:true;opacity:0.3';
        } else {
          material = 'color:#EF2D5E;transparent:true;opacity:0';
        }
        hitbox.setAttribute('geometry', geometry);
        hitbox.setAttribute('material', material);
        hitbox.setAttribute('position', `${newX} 0 ${newZ}`);
        hitbox.setAttribute('class', 'cantap');
        hitbox.setAttribute('visible', 'false');

        // Create new entity for the new object
        const new_coin = document.createElement('a-entity');

        // Setup coin attributes

        new_coin.setAttribute('position', `${world.mine.x} 1 ${world.mine.z}`);
        new_coin.setAttribute(
          'rotation',
          `${randomXRotation} ${randomYRotation} 0`
        ); // Initial Rotation
        new_coin.setAttribute('visible', 'false'); // visible at start.
        new_coin.setAttribute(
          'scale',
          `${world.coin.initial_size} ${world.coin.initial_size} ${world.coin.initial_size}`
        ); // First Size
        new_coin.setAttribute('xrextras-spin', {
          speed: world.coin.rotation_speed,
        }); // Rotate / spin
        new_coin.setAttribute('class', 'cantap'); // Can Tap element
        new_coin.setAttribute('gltf-model', '#coin_model'); // Set model

        // Add the textbox to the coin
        const new_TextBox = document.createElement('a-entity');
        new_TextBox.setAttribute('position', `${newX} 1 ${newZ}`);
        new_TextBox.setAttribute(
          'geometry',
          'primitive:plane;width:3;height:auto'
        );
        new_TextBox.setAttribute(
          'material',
          'color:#444444;transparent:true;opacity:0'
        );
        new_TextBox.setAttribute(
          'text',
          `anchor:center;baseline:center;align:center;wrapCount:20;transparent:true;opacity:0.7;color:#FAD902;value:+${world.textbox_points}`
        );
        new_TextBox.setAttribute('visible', 'false');
        new_TextBox.setAttribute('scale', '4 4 4');

        // Add items to the mine object.
        this.el.sceneEl.appendChild(hitbox); // Add coin to scene
        this.el.sceneEl.appendChild(new_TextBox); // Add text to coins
        this.el.sceneEl.appendChild(new_coin); // Add coin to scene

        hitbox.addEventListener('click', (event) => {
          hitbox.setAttribute('visible', 'false');

          // If the coin is not killed by running out of time from sitting on the ground.
          if (livespawn == true) {
            livespawn = false;

            // Play sound
            var soundName =
              world.coin_sounds[
                Math.floor(Math.random() * world.coin_sounds.length)
              ];
            const coin_audio =
              document.querySelector(soundName).components.sound;
            //let mine_audio = document.querySelector(world.mine.stage[(stage_lvl + 1)].sound);
            coin_audio.playSound();

            // Display text points
            new_TextBox.setAttribute('visible', 'true');

            // Add Animation
            new_TextBox.setAttribute('animation__textFirst', {
              property: 'position',
              to: `${newX} 8 ${newZ}`, // TODO Change trejectory from straight up to curve up to a slight angle.
              dur: '1000',
              easing: 'easeInOutQuad',
              loop: 'false',
              autoplay: 'true',
              dir: 'alternate',
            });

            // Remove After animation
            new_TextBox.addEventListener('animationcomplete__textFirst', () => {
              new_TextBox.setAttribute('visible', 'false'); // remove from display
              new_TextBox.parentNode.removeChild(new_TextBox); // Remove from Aframe
            });

            // Add coin point.
            world.coin_points += 1; // Fetch command to server maybe to increment coin.
            console.log('coin collected!', world.coin_points);
            //this sends the update coin_points to react
            this.gameUpdate();
            world.coins_on_ground -= 1; // Remove counter for coins on ground.

            new_coin.setAttribute('visible', 'false');
            new_coin.parentNode.removeChild(new_coin);
          }

          this.el.sceneEl.removeChild(hitbox);
        });

        // When model is finished loading.
        new_coin.addEventListener('model-loaded', () => {
          // Once the model is loaded, we are ready to show it popping in using an animation
          new_coin.setAttribute('visible', 'true'); // Make coin visible

          /* ===============   Coin Animations   =============== */

          // Setup first animation to move coin from starting point to ending point
          // From the Center Mine/box to the random location out.
          new_coin.setAttribute('animation__first', {
            property: 'position',
            to: `${newX} 0 ${newZ}`,
            dur: '900',
            easing: 'easeInOutQuad',
            loop: 'false',
            autoplay: 'true',
            dir: 'alternate',
          });

          new_coin.setAttribute('animation__second', {
            property: 'scale',
            to: `${world.coin.standing_size} ${world.coin.standing_size} ${world.coin.standing_size}`,
            easing: 'easeOutElastic',
            dur: 800,
          });

          // Setup Third animation start after 5 seconds, to blink.
          new_coin.setAttribute('animation__third', {
            property: 'scale',
            delay: 4500,
            from: `${world.coin.standing_size} ${world.coin.standing_size} ${world.coin.standing_size}`,
            to: `${world.coin.flash_size} ${world.coin.flash_size} ${world.coin.flash_size}`,
            dur: 800,
            loop: 5,
          });

          /* ===============   Coin Listeners   =============== */
          // Listner once third animation is complete destory coin.
          new_coin.addEventListener('animationcomplete__second', () => {
            // Draw hitbox once coins are on floor.
            hitbox.setAttribute('visible', 'true');
          });

          // Listner once third animation is complete destory coin.
          new_coin.addEventListener('animationcomplete__third', () => {
            if (livespawn == true) {
              livespawn = false;

              // de-increment coins on ground.
              world.coins_on_ground -= 1;
              // Remove Coin
              new_coin.setAttribute('visible', 'false');
              new_coin.parentNode.removeChild(new_coin);

              //remove hitbox
              hitbox.setAttribute('visible', 'false');
            }
          });
        });
      }, Math.random() * world.shooting_speed);
    }
  },
  processMine() {
    // Grab game state
    let world = this.state;
    let stage_lvl = world.current_stage;

    // Check if past last stage.
    if (stage_lvl > 3) {
      //console.log("Last stage already reached.");
      return;
    }

    // check if clickable
    if (!world.mine.stage[stage_lvl].clickable) {
      return;
    }

    // Create hitbox for mine.
    const hitbox = document.createElement('a-entity');
    const geometry = `primitive: sphere; radius: ${world.mine.hitbox_radius}`;
    var material = '';

    if (world.debug) {
      material = 'color:#196F3D;transparent:true;opacity:0.3';
    } else {
      material = 'color:#196F3D;transparent:true;opacity:0';
    }

    hitbox.setAttribute('geometry', geometry);
    hitbox.setAttribute('material', material);
    hitbox.setAttribute('position', `${world.mine.x} 0 ${world.mine.z}`);
    hitbox.setAttribute('class', 'cantap');
    hitbox.setAttribute('visible', 'true');

    // Add items to the mine object.
    this.el.sceneEl.appendChild(hitbox);

    // Add Click listener to hitbox.
    hitbox.addEventListener('click', (event) => {
      if (stage_lvl == 1) {
        // start of game
        this.gameStart();
      }

      // Play sound
      const mine_audio = document.querySelector(
        world.mine.stage[stage_lvl].sound
      ).components.sound;
      //let mine_audio = document.querySelector(world.mine.stage[(stage_lvl + 1)].sound);
      mine_audio.playSound();

      world.mine.stage[stage_lvl].clickable = false;

      // Coins component from mine click
      this.addCoins(stage_lvl);

      // Check if there is a next stage.
      if (world.mine.stage.hasOwnProperty(stage_lvl + 1)) {
        world.mine.stage[stage_lvl + 1].clickable = true;

        let next_mine = document.getElementById(
          world.mine.stage[stage_lvl + 1].name
        );
        next_mine.setAttribute('visible', 'true');
        world.current_stage = stage_lvl + 1;

        // Move to next stage.
        world.move_stage = true;
      }
      let current_mine = document.getElementById(
        world.mine.stage[stage_lvl].name
      );
      current_mine.setAttribute('visible', 'false');

      // Remove this hitbox, to make way for next hitbox.
      this.el.sceneEl.removeChild(hitbox);
    });
  },
  mineStageController(td) {
    let world = this.state;
    if (world.move_stage) {
      if (world.moving_timer > 0) {
        world.moving_timer -= td;
        return;
      }
      world.moving_timer = world.moving_time;
      world.move_stage = false;

      this.processMine();
    }
  },
  gameStart() {
    let startEvent = new Event('gameStart');
    window.parent.dispatchEvent(startEvent);
  },
  gameUpdate() {
    let message = {
      coinPoints: this.state.coin_points,
    };

    let evtObj = new CustomEvent('points', { detail: message });
    window.parent.dispatchEvent(evtObj);
  },
  init() {
    this.state = {
      mine: {
        stage: {
          1: {
            sound: '#mine_high_sound',
            name: 'mine_high',
            clickable: true,
          },
          2: {
            sound: '#mine_medium_sound',
            name: 'mine_medium',
            clickable: false,
          },
          3: {
            sound: '#mine_low_sound',
            name: 'mine_low',
            clickable: false,
          },
          4: {
            name: 'mine_empty',
            clickable: false,
          },
        },
        hitbox_radius: 5,
        x: 0,
        y: 2,
        z: -12,
      },

      coin: {
        hitbox_radius: 1,
        rotation_speed: 2000,
        initial_size: 0.001,
        standing_size: 0.015,
        flash_size: 0.01,
        extra_rotation: false,
      },

      coin_sounds: ['#coin_sound1'],
      moving_timer: 0,
      moving_time: 0.5,
      move_stage: true,
      current_stage: 1,
      debug: false,
      coins_on_ground: 0,
      coin_points: 0,
      speed_to_shoot: 1000,
      textbox_points: 100,

      level: {
        1: {
          round_coins: 15,
          distance: 10,
        },
        2: {
          round_coins: 15,
          distance: 10,
        },
        3: {
          round_coins: 15,
          distance: 10,
        },
      },
    };

    const mine_high = document.getElementById('mine_high');
    const mine_medium = document.getElementById('mine_medium');
    const mine_low = document.getElementById('mine_low');
    const mine_empty = document.getElementById('mine_empty');

    mine_high.setAttribute(
      'position',
      `${this.state.mine.x} ${this.state.mine.y} ${this.state.mine.z}`
    );
    mine_medium.setAttribute(
      'position',
      `${this.state.mine.x} ${this.state.mine.y} ${this.state.mine.z}`
    );
    mine_low.setAttribute(
      'position',
      `${this.state.mine.x} ${this.state.mine.y} ${this.state.mine.z}`
    );
    mine_empty.setAttribute(
      'position',
      `${this.state.mine.x} ${this.state.mine.y} ${this.state.mine.z}`
    );

    mine_medium.setAttribute('visible', 'false');
    mine_low.setAttribute('visible', 'false');
    mine_empty.setAttribute('visible', 'false');
  },
  tick(time, timeDelta) {
    // normalize timeDelta (ms)
    var td = timeDelta / 1000;
    this.mineStageController(td);
  },
});
