/**
 * VOID RTS -- 2D Pixel Logo with Destructible Blocks
 *
 * Flat 2D pixel art letters made of chunky blocks.
 * Click anywhere on the logo to blast blocks away with physics.
 * Blocks regenerate after a short delay.
 * Glow, destruction physics, and retro feel. Transparent background.
 */
(function () {
  'use strict';

  var canvas = document.getElementById('voxel-logo');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Skip animation for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  // ===================================================================
  //  CHUNKY PIXEL FONT -- each letter is 8 wide x 10 tall
  //  Strokes are 2-3 pixels thick for that fat arcade look
  // ===================================================================
  // ===================================================================
  //  CHUNKY PIXEL FONT -- 14 wide x 14 tall, 4px thick strokes
  //  Ultra bold, logo-style letters
  // ===================================================================
  var FONT = {
    V: [
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,0],
      [0,1,1,1,1,0,0,0,0,1,1,1,1,0],
      [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
      [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
      [0,0,1,1,1,1,0,0,1,1,1,1,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
      [0,0,0,0,1,1,1,1,1,1,0,0,0,0],
    ],
    O: [
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,0,0,1,1,1,1,1,0],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [0,1,1,1,1,1,0,0,1,1,1,1,1,0],
      [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0],
    ],
    I: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ],
    D: [
      [1,1,1,1,1,1,1,1,1,1,0,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [1,1,1,1,0,0,0,0,1,1,1,1,1,0],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,1,1,1,1,1,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    ],
    R: [
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [1,1,1,1,0,0,0,0,1,1,1,1,1,0],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,1,1,1,1,1,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [1,1,1,1,1,1,1,1,1,1,1,0,0,0],
      [1,1,1,1,0,0,1,1,1,1,0,0,0,0],
      [1,1,1,1,0,0,0,1,1,1,1,0,0,0],
      [1,1,1,1,0,0,0,0,1,1,1,1,0,0],
      [1,1,1,1,0,0,0,0,0,1,1,1,1,0],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,1,1,1,1],
    ],
    T: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
      [0,0,0,0,0,1,1,1,1,0,0,0,0,0],
    ],
    S: [
      [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [1,1,1,1,1,0,0,0,0,1,1,1,1,1],
      [1,1,1,1,0,0,0,0,0,0,0,0,0,0],
      [1,1,1,1,1,0,0,0,0,0,0,0,0,0],
      [0,1,1,1,1,1,1,1,1,0,0,0,0,0],
      [0,0,1,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,0,0,0,1,1,1,1,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,1,1,1,1,1,0],
      [0,0,0,0,0,0,0,0,0,0,1,1,1,1],
      [0,0,0,0,0,0,0,0,0,0,1,1,1,1],
      [1,1,1,1,1,0,0,0,0,1,1,1,1,1],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,0,1,1,1,1,1,1,1,1,1,1,0,0],
    ],
  };

  // ===================================================================
  //  CONFIG
  // ===================================================================
  var BLOCK_SIZE = 6;       // base pixel block size before scaling
  var BLOCK_GAP = 1;        // gap between blocks
  var LETTER_GAP = 1;       // gap between letters (in block units) — tight logo feel
  var REGEN_DELAY = 1800;   // ms before destroyed blocks start coming back
  var REGEN_SPEED = 0.025;  // how fast blocks fade back in
  var BLAST_RADIUS = 3.2;   // destruction radius in block-cell units
  var HUE_MAIN = 207;       // base hue for the blue (#44aaff)

  // ===================================================================
  //  STATE
  // ===================================================================
  var blocks = [];          // all pixel blocks for "VOID"
  var rtsBlocks = [];       // all pixel blocks for "RTS"
  var debris = [];          // flying destroyed block particles
  var shockwaves = [];
  var screenShake = { x: 0, y: 0, intensity: 0 };
  var W = 0, H = 0, dpr = 1, time = 0;
  var mx = -999, my = -999;
  var scale = 1;
  var mainOffX = 0, mainOffY = 0;
  var mainCols = 0, mainRows = 10;
  var rtsOffX = 0, rtsOffY = 0;
  var rtsCols = 0, rtsRows = 10;
  var rtsScale = 1;
  var clicked = false, instrAlpha = 1;

  // ===================================================================
  //  BUILD BLOCK GRID from font data
  // ===================================================================
  function buildWord(word, font) {
    var arr = [];
    var col = 0;
    for (var i = 0; i < word.length; i++) {
      var L = font[word[i]];
      if (!L) continue;
      var lw = L[0].length;
      var lh = L.length;
      for (var r = 0; r < lh; r++) {
        for (var c = 0; c < lw; c++) {
          if (L[r][c]) {
            arr.push({
              // grid position
              col: col + c,
              row: r,
              // letter index (for color variation)
              li: i,
              // state
              alive: true,
              opacity: 1,
              destroyedAt: 0,
              // random phase for subtle animation
              phase: Math.random() * 6.28,
            });
          }
        }
      }
      col += lw + LETTER_GAP;
    }
    return { blocks: arr, cols: col - LETTER_GAP, rows: font[word[0]].length };
  }

  function init() {
    var main = buildWord('VOID', FONT);
    blocks = main.blocks;
    mainCols = main.cols;
    mainRows = main.rows;

    rtsBlocks = [];
    rtsCols = 0;
    rtsRows = 0;
  }

  // ===================================================================
  //  LAYOUT -- figure out scale and position to center everything
  // ===================================================================
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.parentElement.clientWidth;
    layout();                        // compute scale + H first
    canvas.style.height = H + 'px'; // set CSS height so no stretch
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function layout() {
    // Scale so VOID fills ~80% of canvas width
    var gridW = mainCols * (BLOCK_SIZE + BLOCK_GAP) - BLOCK_GAP;
    scale = Math.min((W * 0.80) / gridW, 6);

    var cellSize = (BLOCK_SIZE + BLOCK_GAP) * scale;
    var totalW = mainCols * cellSize - BLOCK_GAP * scale;
    var totalH = mainRows * cellSize - BLOCK_GAP * scale;

    // Total content height + padding (extra top for hint text)
    var padTop = 28 * scale;
    var padBottom = 12 * scale;
    H = padTop + totalH + padBottom;

    mainOffX = (W - totalW) / 2;
    mainOffY = padTop;
  }

  // Convert grid coords to screen coords for main VOID text
  function gridToScreen(col, row) {
    var cs = (BLOCK_SIZE + BLOCK_GAP) * scale;
    return {
      x: mainOffX + col * cs,
      y: mainOffY + row * cs,
    };
  }

  // Convert grid coords to screen coords for RTS text
  function gridToScreenRTS(col, row) {
    var cs = (BLOCK_SIZE + BLOCK_GAP) * rtsScale;
    return {
      x: rtsOffX + col * cs,
      y: rtsOffY + row * cs,
    };
  }

  // ===================================================================
  //  DEBRIS PARTICLES -- the flying blocks after destruction
  // ===================================================================
  function spawnDebris(sx, sy, sz, hue, clickX, clickY) {
    // Direction away from click point
    var dx = sx - clickX;
    var dy = sy - clickY;
    var dist = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = dx / dist;
    var ny = dy / dist;

    // Base speed scales with proximity (closer = faster)
    var speed = (3 + Math.random() * 5) * scale;
    // Add some randomness to the direction
    var spread = (Math.random() - 0.5) * 2;

    debris.push({
      x: sx,
      y: sy,
      vx: (nx + spread * 0.5) * speed,
      vy: (ny + spread * 0.5) * speed - 2 * scale, // slight upward bias
      size: sz * (0.6 + Math.random() * 0.5),
      rotation: Math.random() * 6.28,
      rotSpeed: (Math.random() - 0.5) * 0.3,
      gravity: 0.15 * scale,
      life: 1.0,
      decay: 0.008 + Math.random() * 0.008,
      hue: hue,
      lightness: 35 + Math.random() * 25,
    });
  }

  function tickDebris() {
    for (var i = debris.length - 1; i >= 0; i--) {
      var d = debris[i];
      d.x += d.vx;
      d.y += d.vy;
      d.vy += d.gravity;      // gravity pulls down
      d.vx *= 0.985;          // air friction
      d.rotation += d.rotSpeed;
      d.life -= d.decay;
      if (d.life <= 0) debris.splice(i, 1);
    }
  }

  function drawDebris() {
    for (var i = 0; i < debris.length; i++) {
      var d = debris[i];
      var alpha = d.life * d.life; // fade out with easing
      if (alpha < 0.01) continue;

      ctx.save();
      ctx.translate(d.x, d.y);
      ctx.rotate(d.rotation);
      ctx.globalAlpha = alpha;

      var sz = d.size * (0.5 + d.life * 0.5);
      var half = sz / 2;

      // Block body
      ctx.fillStyle = 'hsl(' + d.hue + ',75%,' + d.lightness + '%)';
      ctx.fillRect(-half, -half, sz, sz);

      // Glow on the debris
      ctx.shadowColor = 'hsl(' + d.hue + ',80%,60%)';
      ctx.shadowBlur = 6 * d.life;
      ctx.fillRect(-half, -half, sz, sz);
      ctx.shadowBlur = 0;

      ctx.globalAlpha = 1;
      ctx.restore();
    }
  }

  // ===================================================================
  //  DESTRUCTION -- blast blocks near click point
  // ===================================================================
  function destroy(px, py) {
    var cellSize = (BLOCK_SIZE + BLOCK_GAP) * scale;
    var blockPx = BLOCK_SIZE * scale;
    var radius = cellSize * BLAST_RADIUS;
    var radiusSq = radius * radius;
    var hit = false;

    // Destroy VOID blocks
    for (var i = 0; i < blocks.length; i++) {
      var b = blocks[i];
      if (!b.alive) continue;
      var pos = gridToScreen(b.col, b.row);
      var cx = pos.x + blockPx / 2;
      var cy = pos.y + blockPx / 2;
      var dx = px - cx;
      var dy = py - cy;
      if (dx * dx + dy * dy < radiusSq) {
        b.alive = false;
        b.opacity = 0;
        b.destroyedAt = performance.now();
        // Spawn debris flying away from click
        var hue = HUE_MAIN;
        spawnDebris(cx, cy, blockPx, hue, px, py);
        hit = true;
      }
    }

    // Destroy RTS blocks too
    var rtsCellSize = (BLOCK_SIZE + BLOCK_GAP) * rtsScale;
    var rtsBlockPx = BLOCK_SIZE * rtsScale;
    var rtsRadius = rtsCellSize * BLAST_RADIUS;
    var rtsRadiusSq = rtsRadius * rtsRadius;

    for (var j = 0; j < rtsBlocks.length; j++) {
      var rb = rtsBlocks[j];
      if (!rb.alive) continue;
      var rpos = gridToScreenRTS(rb.col, rb.row);
      var rcx = rpos.x + rtsBlockPx / 2;
      var rcy = rpos.y + rtsBlockPx / 2;
      var rdx = px - rcx;
      var rdy = py - rcy;
      if (rdx * rdx + rdy * rdy < rtsRadiusSq) {
        rb.alive = false;
        rb.opacity = 0;
        rb.destroyedAt = performance.now();
        spawnDebris(rcx, rcy, rtsBlockPx, HUE_MAIN, px, py);
        hit = true;
      }
    }

    if (hit) {
      // Shockwave ring expanding from click point
      shockwaves.push({ x: px, y: py, r: 0, maxR: radius * 2, life: 1 });
      screenShake.intensity = 6 * scale;
    }
  }

  // ===================================================================
  //  SHOCKWAVES
  // ===================================================================
  function tickShockwaves() {
    for (var i = shockwaves.length - 1; i >= 0; i--) {
      var s = shockwaves[i];
      s.r += 4.5 * scale;
      s.life -= 0.025;
      if (s.life <= 0) shockwaves.splice(i, 1);
    }
  }

  function drawShockwaves() {
    for (var i = 0; i < shockwaves.length; i++) {
      var s = shockwaves[i];
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.28);
      ctx.strokeStyle = 'rgba(68,170,255,' + (s.life * 0.35) + ')';
      ctx.lineWidth = 2.5 * scale * s.life;
      ctx.stroke();
    }
  }

  // ===================================================================
  //  SCREEN SHAKE
  // ===================================================================
  function tickShake() {
    if (screenShake.intensity > 0.2) {
      screenShake.x = (Math.random() - 0.5) * screenShake.intensity;
      screenShake.y = (Math.random() - 0.5) * screenShake.intensity;
      screenShake.intensity *= 0.87;
    } else {
      screenShake.x = 0;
      screenShake.y = 0;
      screenShake.intensity = 0;
    }
  }

  // ===================================================================
  //  REGENERATION -- blocks fade back in after a delay
  // ===================================================================
  function tickRegen() {
    var now = performance.now();
    var allBlocks = blocks.concat(rtsBlocks);
    for (var i = 0; i < allBlocks.length; i++) {
      var b = allBlocks[i];
      if (!b.alive && b.destroyedAt > 0 && now - b.destroyedAt > REGEN_DELAY) {
        b.opacity += REGEN_SPEED;
        if (b.opacity >= 1) {
          b.opacity = 1;
          b.alive = true;
          b.destroyedAt = 0;
        }
      }
    }
  }

  // ===================================================================
  //  BLOOM LAYER -- soft glow behind the entire word
  // ===================================================================
  function drawBloom(blockList, toScreen, sc) {
    var blockPx = BLOCK_SIZE * sc;
    var pulse = 0.6 + Math.sin(time * 0.002) * 0.15;
    ctx.save();
    ctx.shadowColor = 'hsla(' + HUE_MAIN + ',90%,55%,' + (pulse * 0.8) + ')';
    ctx.shadowBlur = 28 * sc;
    ctx.fillStyle = 'hsla(' + HUE_MAIN + ',80%,50%,0.15)';
    for (var i = 0; i < blockList.length; i++) {
      var b = blockList[i];
      var op = b.alive ? 1 : b.opacity;
      if (op < 0.05) continue;
      var pos = toScreen(b.col, b.row);
      ctx.globalAlpha = op * 0.5;
      ctx.fillRect(pos.x - 2 * sc, pos.y - 2 * sc, blockPx + 4 * sc, blockPx + 4 * sc);
    }
    ctx.restore();
  }

  // ===================================================================
  //  DRAW BLOCKS -- the main letter rendering
  // ===================================================================
  function drawBlocks(blockList, toScreen, sc) {
    var blockPx = BLOCK_SIZE * sc;
    var gapPx = BLOCK_GAP * sc;
    var glowPulse = 0.5 + Math.sin(time * 0.002) * 0.2;

    for (var i = 0; i < blockList.length; i++) {
      var b = blockList[i];
      var op = b.alive ? 1 : b.opacity;
      if (op < 0.01) continue;

      var pos = toScreen(b.col, b.row);
      var x = pos.x;
      var y = pos.y;

      var hue = HUE_MAIN;
      var lightness = 40 + Math.sin(time * 0.003 + b.phase) * 5;

      ctx.globalAlpha = op;

      // -- Block body --
      ctx.fillStyle = 'hsl(' + hue + ',75%,' + lightness + '%)';
      ctx.fillRect(x, y, blockPx, blockPx);

      // -- Subtle inner highlight (top edge, 1px) --
      ctx.fillStyle = 'rgba(255,255,255,' + (0.12 * op) + ')';
      ctx.fillRect(x, y, blockPx, Math.max(1, gapPx));

      // -- Subtle inner shadow (bottom edge) --
      ctx.fillStyle = 'rgba(0,0,0,' + (0.15 * op) + ')';
      ctx.fillRect(x, y + blockPx - Math.max(1, gapPx), blockPx, Math.max(1, gapPx));

      // -- Phosphor glow behind each block --
      ctx.shadowColor = 'hsla(' + hue + ',85%,55%,' + (glowPulse * op * 0.8) + ')';
      ctx.shadowBlur = 14 * sc;
      ctx.fillStyle = 'hsla(' + hue + ',80%,' + lightness + '%,' + (op * 0.5) + ')';
      ctx.fillRect(x, y, blockPx, blockPx);
      ctx.shadowBlur = 0;

      // -- Regen sparkle: blocks that are fading back in get a shimmer --
      if (!b.alive && b.opacity > 0.05 && b.opacity < 0.95) {
        var sparkle = Math.sin(time * 0.012 + b.phase * 3) * 0.5 + 0.5;
        ctx.fillStyle = 'rgba(140,200,255,' + (sparkle * b.opacity * 0.5) + ')';
        ctx.fillRect(x - 1, y - 1, blockPx + 2, blockPx + 2);
      }

      ctx.globalAlpha = 1;
    }
  }

  // ===================================================================
  //  GLOW LAYER -- neon/phosphor bloom behind the letters
  // ===================================================================
  function drawGlow() {
    var pulse = 0.10 + Math.sin(time * 0.0018) * 0.05;
    var cellSize = (BLOCK_SIZE + BLOCK_GAP) * scale;
    var centerY = mainOffY + (mainRows * cellSize) / 2;

    // Big soft glow behind VOID
    var g = ctx.createRadialGradient(W / 2, centerY, 0, W / 2, centerY, W * 0.4);
    g.addColorStop(0, 'rgba(68,170,255,' + (pulse * 1.2) + ')');
    g.addColorStop(0.3, 'rgba(68,170,255,' + (pulse * 0.4) + ')');
    g.addColorStop(1, 'rgba(68,170,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Smaller glow behind RTS
    var rtsCenterY = rtsOffY + (rtsRows * (BLOCK_SIZE + BLOCK_GAP) * rtsScale) / 2;
    var g2 = ctx.createRadialGradient(W / 2, rtsCenterY, 0, W / 2, rtsCenterY, W * 0.18);
    g2.addColorStop(0, 'rgba(68,170,255,' + (pulse * 0.6) + ')');
    g2.addColorStop(1, 'rgba(68,170,255,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, W, H);
  }

  // ===================================================================
  //  MOUSE GLOW -- subtle highlight following cursor
  // ===================================================================
  function drawMouse() {
    if (mx < 0) return;
    var g = ctx.createRadialGradient(mx, my, 0, mx, my, 45 * scale);
    g.addColorStop(0, 'rgba(68,170,255,0.07)');
    g.addColorStop(1, 'rgba(68,170,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  // CRT effects removed -- keeping transparent canvas with just blocks + glow

  // ===================================================================
  //  INSTRUCTION HINT
  // ===================================================================
  function drawHint() {
    var blink = Math.sin(time * 0.003) * 0.25 + 0.75;
    var alpha = blink;

    // Position above VOID
    var ty = mainOffY - 10 * scale;

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = 'rgba(142,157,182,0.6)';
    ctx.font = Math.max(10, 11 * scale * 0.5) + "px 'Tiny5','Courier New',monospace";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('[ CLICK TO DESTROY ]', W / 2, ty);
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  // ===================================================================
  //  MAIN LOOP
  // ===================================================================
  function frame(ts) {
    time = ts || 0;

    tickShake();
    ctx.save();
    ctx.translate(screenShake.x, screenShake.y);

    ctx.clearRect(-10, -10, W + 20, H + 20);

    // (background glow and mouse glow removed)

    // Bloom layer behind letters
    drawBloom(blocks, gridToScreen, scale);

    // Draw the letters
    drawBlocks(blocks, gridToScreen, scale);
    // (RTS removed)

    // Effects
    tickShockwaves();
    drawShockwaves();
    tickDebris();
    drawDebris();
    tickRegen();

    drawHint();

    ctx.restore();
    requestAnimationFrame(frame);
  }

  // ===================================================================
  //  EVENTS
  // ===================================================================
  function getPos(e) {
    var r = canvas.getBoundingClientRect();
    var cx = e.touches ? e.touches[0].clientX : e.clientX;
    var cy = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: cx - r.left, y: cy - r.top };
  }

  canvas.addEventListener('click', function (e) {
    var p = getPos(e);
    destroy(p.x, p.y);
    clicked = true;
  });

  canvas.addEventListener('touchstart', function (e) {
    e.preventDefault();
    var p = getPos(e);
    destroy(p.x, p.y);
    clicked = true;
  }, { passive: false });

  canvas.addEventListener('mousemove', function (e) {
    var p = getPos(e);
    mx = p.x;
    my = p.y;
  });

  canvas.addEventListener('mouseleave', function () {
    mx = -999;
    my = -999;
  });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 80);
  });

  // ===================================================================
  //  BOOT
  // ===================================================================
  init();
  resize();
  requestAnimationFrame(frame);
})();
