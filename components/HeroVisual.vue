<script setup lang="ts">
// Animated "AI core": a glowing center orbited by icon satellites on rotating
// rings, wrapped in a spinning circular-text label and a rotating halo.
// Pure CSS/SVG — no JS animation loop, no dependencies.

// Satellites ride a shared orbit; same duration keeps them in formation,
// staggered negative delays spread them evenly around the ring.
const satellites = [
  { icon: 'tune', label: 'Fine-tuning', delay: '0s' },
  { icon: 'robot', label: 'Agents', delay: '-6s' },
  { icon: 'cloud', label: 'Cloud', delay: '-12s' },
  { icon: 'sparkles', label: 'AI', delay: '-18s' }
]
</script>

<template>
  <div class="hv" aria-hidden="true">
    <!-- Rotating conic-gradient halo -->
    <div class="hv-halo" />

    <!-- Spinning circular text label -->
    <svg class="hv-text" viewBox="0 0 200 200">
      <defs>
        <path
          id="hvCircle"
          d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
        />
      </defs>
      <text>
        <textPath href="#hvCircle" xlink:href="#hvCircle">
          NIYABH&nbsp;LABS&nbsp;&nbsp;•&nbsp;&nbsp;AI&nbsp;ENGINEERING&nbsp;&nbsp;•&nbsp;&nbsp;FINE-TUNING&nbsp;&nbsp;•&nbsp;&nbsp;AGENTS&nbsp;&nbsp;•&nbsp;&nbsp;
        </textPath>
      </text>
    </svg>

    <!-- Dashed orbit rings -->
    <div class="hv-ring hv-ring--outer" />
    <div class="hv-ring hv-ring--inner" />

    <!-- Orbiting satellites -->
    <div
      v-for="sat in satellites"
      :key="sat.label"
      class="hv-orbit"
      :style="{ animationDelay: sat.delay }"
    >
      <div class="hv-orbit-pos">
        <div class="hv-sat" :style="{ animationDelay: sat.delay }">
          <span class="hv-chip">
            <AppIcon :name="sat.icon" class="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>

    <!-- Inner counter-rotating dots -->
    <div class="hv-dots">
      <span class="hv-dot" style="--a: 0deg" />
      <span class="hv-dot" style="--a: 120deg" />
      <span class="hv-dot" style="--a: 240deg" />
    </div>

    <!-- Glowing core -->
    <div class="hv-core">
      <div class="hv-core-inner">
        <AppIcon name="bolt" class="h-10 w-10 text-white" />
      </div>
    </div>

    <!-- Drifting stat pills -->
    <div class="hv-pill hv-pill--tr">
      <span class="hv-pulse" />
      Fine-tuned
    </div>
    <div class="hv-pill hv-pill--bl">
      <strong>99.9%</strong> eval pass
    </div>
  </div>
</template>

<style scoped>
.hv {
  position: relative;
  width: 100%;
  max-width: 30rem;
  margin-inline: auto;
  aspect-ratio: 1 / 1;
}

/* Rotating conic halo behind everything */
.hv-halo {
  position: absolute;
  inset: 8%;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(16, 185, 129, 0),
    rgba(52, 211, 153, 0.35),
    rgba(5, 150, 105, 0.15),
    rgba(16, 185, 129, 0)
  );
  filter: blur(26px);
  animation: hv-spin 18s linear infinite;
}

/* Circular text */
.hv-text {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: hv-spin 40s linear infinite;
}
.hv-text text {
  font-family: 'Space Grotesk', ui-sans-serif, sans-serif;
  font-size: 8.5px;
  font-weight: 600;
  letter-spacing: 2.5px;
  fill: #059669;
  text-transform: uppercase;
}

/* Dashed orbit rings */
.hv-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px dashed rgba(16, 185, 129, 0.35);
}
.hv-ring--outer {
  inset: 15%;
  animation: hv-spin 26s linear infinite;
}
.hv-ring--inner {
  inset: 30%;
  border-color: rgba(16, 185, 129, 0.25);
  animation: hv-spin-rev 20s linear infinite;
}

/* Satellite orbit mechanics: the orbit wrapper rotates; the positioned child
   sits on the ring; the inner .hv-sat counter-rotates to keep icons upright. */
.hv-orbit {
  position: absolute;
  inset: 0;
  animation: hv-spin 24s linear infinite;
}
.hv-orbit-pos {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
}
.hv-sat {
  animation: hv-spin-rev 24s linear infinite;
}
.hv-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.9rem;
  background: #fff;
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.15);
  box-shadow: 0 10px 30px -12px rgba(6, 78, 59, 0.4);
}

/* Inner orbiting dots */
.hv-dots {
  position: absolute;
  inset: 32%;
  animation: hv-spin 14s linear infinite;
}
.hv-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  margin: -4px;
  border-radius: 50%;
  background: #34d399;
  transform: rotate(var(--a)) translateY(-92px);
}

/* Glowing core */
.hv-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 34%;
  height: 34%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: hv-pulse 4s ease-in-out infinite;
}
.hv-core-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at 30% 25%, #6ee7b7, #059669 55%, #047857);
  box-shadow:
    0 0 0 8px rgba(16, 185, 129, 0.12),
    0 0 60px -6px rgba(16, 185, 129, 0.7);
}

/* Drifting stat pills */
.hv-pill {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px -12px rgba(6, 78, 59, 0.35);
  font-size: 0.8rem;
  font-weight: 600;
  color: #334155;
  white-space: nowrap;
}
.hv-pill strong {
  color: #059669;
}
.hv-pill--tr {
  top: 6%;
  right: -2%;
  animation: hv-float 6s ease-in-out infinite;
}
.hv-pill--bl {
  bottom: 8%;
  left: -3%;
  animation: hv-float 7s ease-in-out infinite reverse;
}
.hv-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
  animation: hv-ping 1.8s ease-out infinite;
}

@keyframes hv-spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes hv-spin-rev {
  to {
    transform: rotate(-360deg);
  }
}
@keyframes hv-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.06);
  }
}
@keyframes hv-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}
@keyframes hv-ping {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
  }
  70%,
  100% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
}

/* Respect reduced-motion preferences */
@media (prefers-reduced-motion: reduce) {
  .hv-halo,
  .hv-text,
  .hv-ring,
  .hv-orbit,
  .hv-sat,
  .hv-dots,
  .hv-core,
  .hv-pill,
  .hv-pulse {
    animation: none !important;
  }
}
</style>
