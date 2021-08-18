const particlesConfig = {
  background: {
    color: {
      value: "#eeeeee",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: "#111111",
    },
    links: {
      color: {
        value: "#111111",
      },
      distance: 150,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      options: {
        character: {
          value: ["G`", "U", "L", "O", "M", "J", "O", "N"],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true,
        },
        char: {
          value: ["G`", "U", "L", "O", "M", "J", "O", "N"],

          font: "Verdana",
          style: "",
          weight: "400",
          fill: true,
        },
      },
      type: "char",
    },
    size: {
      value: 16,
      animation: {
        speed: 10,
        minimumValue: 10,
      },
    },
    stroke: {
      width: 1,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
      },
    },
  },
};
export default particlesConfig;