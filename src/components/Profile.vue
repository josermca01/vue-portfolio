<template>
  <v-sheet class="ma-4" color="background2" elevation="0" rounded="lg">
    <v-card class="background rounded-0 elevation-0" >
      <v-sheet class="px-0 mx-0 rounded-t-xl rounded-b overflow-hidden" :height="heightBackground">
        <vue-particles
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="options"
        />
      </v-sheet>
      <v-row class="background" no-gutters>
        <v-col :cols="colsNums">
          <v-sheet class="background pa-2 ma-2">
            <v-avatar border="background opacity-100 xl" class="position-absolute bottom-0 left-0"
              :image="profile" :size="height">
            </v-avatar>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class=" pa-2 ma-2">
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  <v-row class="" no-gutters>
    <v-col :cols="colsNums">
      <v-sheet :class="nameTitle">
        José Ricardo Munhoz
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
  <v-row class="bg-background" no-gutters>
    <v-col class="d-flex" :cols="colsNums">
      <v-sheet class="d-flex">
        <div :class="socialSpace" v-for="item in social" :key="item.link">
          <a v-if="item.icon=='mdi-download-box-outline'":href="item.link" download class="btn"><v-icon class="bg-background2 rounded-circle pa-6" :icon="item.icon"></v-icon></a>
          <a v-else class="btn" :href="item.link" target="_blank"
          rel="noopener noreferrer"><v-icon class="bg-background2 rounded-circle pa-6" :icon="item.icon"></v-icon></a>
          </div>
      </v-sheet>
    </v-col>
    <v-col>
      <v-sheet class=" pa-2 ">
      </v-sheet>
    </v-col>
  </v-row>
  </v-sheet>
  
</template>

<script setup>
import { useTheme } from 'vuetify';
import profile from '../assets/images/profile.jpg'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
const social = [{
  icon: "mdi-github",
  link: "https://github.com/josermca01"
}, {
  icon: "mdi-linkedin",
  link: "https://www.linkedin.com/in/jose-ricardo-munhoz-456596217/"
}, {
  icon: "mdi-gmail",
  link: "mailto:josermca01@gmail.com"
}, {
  icon: "mdi-download-box-outline",
  link: "src/assets/documents/José Ricardo Munhoz Carlos de Almeida.pdf"
},]

const options = 
{
  "autoPlay": true,
  "background": {
    "image": "linear-gradient(#0c0d13,#0d1d31)",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
    "enable": false
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "detectRetina": true,
  "duration": 0,
  "fpsLimit": 120,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": false,
        "mode": {}
      },
      "onDiv": {
        "selectors": {},
        "enable": false,
        "mode": {},
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": {},
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "delay": 0.5,
        "enable": true
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 50,
        "speed": 1
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 100,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 4
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad"
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "absorb": {
        "speed": 2
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "enable": false,
      "maxSpeed": 50,
      "mode": "bounce",
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "color": {
      "value": "#fff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": {}
    },
    "groups": [],
    "move": {
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "distance": 200,
        "enable": false,
        "rotate": {
          "x": 3000,
          "y": 3000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "bottom",
      "drift": 0,
      "enable": true,
      "gravity": {
        "acceleration": 9.81,
        "enable": false,
        "inverse": false,
        "maxSpeed": 50
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": false,
      "size": false,
      "speed": 2,
      "spin": {
        "acceleration": 0,
        "enable": false
      },
      "straight": true,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": false
    },
    "number": {
      "density": {
        "enable": true,
        "width": 1920,
        "height": 1080
      },
      "limit": {
        "mode": "delete",
        "value": 0
      },
      "value": 400
    },
    "opacity": {
      "value": 1,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 2,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "enable": false,
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": "circle"
    },
    "size": {
      "value": 10,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": {
        "min": 0,
        "max": 100
      },
      "opacityRate": 10,
      "sizeRate": 10,
      "velocityRate": 10
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 10,
      "enable": true,
      "speed": {
        "angle": 10,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "path": false
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": false,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Snow",
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  },
  style:{
    position: 'relative',
    height:'25rem',
  }
}

const theme = useTheme()
const { name } = useDisplay()
const heightBackground = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 200
    case 'sm': return 250
    case 'md': return 270
    case 'lg': return 350
    case 'xl': return 350
    case 'xxl': return 350
  }
  return undefined
})
const height = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 120
    case 'sm': return 150
    case 'md': return 170
    case 'lg': return 200
    case 'xl': return 250
    case 'xxl': return 300
  }
  return undefined
})
const socialSpace = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return "pa-1"
    case 'sm': return "pa-2"
    case 'md': return "pa-2"
    case 'lg': return "pa-2"
    case 'xl': return "pa-2"
    case 'xxl': return "pa-2"
  }
  return undefined
})
const nameTitle = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return "pa-4 text-h4"
    case 'sm': return "pa-4 text-h4"
    case 'md': return "pa-4 text-h3"
    case 'lg': return "pa-4 text-h2"
    case 'xl': return "pa-4 text-h2"
    case 'xxl': return "pa-4 text-h2"
  }
  return undefined
})
const colsNums = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 12
    case 'sm': return 12
    case 'md': return 12
    case 'lg': return 12
    case 'xl': return 12
    case 'xxl': return 12
  }
  return undefined
})
const waves = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return "2rem"
    case 'sm': return "5rem"
    case 'md': return "8rem"
    case 'lg': return "15rem"
    case 'xl': return "16rem"
    case 'xxl': return "12rem"
  }
  return undefined
})
</script>

<style scoped>
.btn{
  border-radius: 50%;
}
.btn::before{
  border-radius: 50%;
}
</style>

<!-- <style lang="scss">
@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.stars {
  top: 0;
  left: 0;
  width: 150%;
  height: 120%;
  transform: rotate(-45deg);
}

.star {
  $star-count: 5000;
  --star-color: var(--primary-color);
  --star-tail-length: 6em;
  --star-tail-height: 2px;
  --star-width: calc(var(--star-tail-length) / 6);
  --fall-duration: 9s;
  --tail-fade-duration: var(--fall-duration);

  position: absolute;
  top: var(--top-offset);
  left: 0;
  width: var(--star-tail-length);
  height: var(--star-tail-height);
  color: var(--star-color);
  background: linear-gradient(45deg, currentColor, transparent);
  border-radius: 50%;
  filter: drop-shadow(0 0 6px currentColor);
  transform: translate3d(104em, 0, 0);
  animation: fall var(--fall-duration) var(--fall-delay) linear infinite, tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite;
  
  @include sp-layout {
    // For mobile performance, tail-fade animation will be removed QAQ
    animation: fall var(--fall-duration) var(--fall-delay) linear infinite;
  }

  @for $i from 1 through $star-count {
    &:nth-child(#{$i}) {
      --star-tail-length: #{random_range(500em, 750em) / 100};
      --top-offset: #{random_range(0vh, 10000vh) / 100};
      --fall-duration: #{random_range(6000, 12000s) / 1000};
      --fall-delay: #{random_range(0, 10000s) / 1000};
    }
  }

  &::before, &::after {
    position: absolute;
    content: '';
    top: 0;
    left: calc(var(--star-width) / -2);
    width: var(--star-width);
    height: 100%;
    background: linear-gradient(45deg, transparent, currentColor, transparent);
    border-radius: inherit;
    animation: blink 2s linear infinite;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

@keyframes fall {
  to {
    transform: translate3d(-30em, 0, 0);
  }
}

@keyframes tail-fade {
  0%, 50% {
    width: var(--star-tail-length);
    opacity: 1;
  }

  70%, 80% {
    width: 0;
    opacity: 0.4;
  }

  100% {
    width: 0;
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0.6;
  }
}
</style> -->