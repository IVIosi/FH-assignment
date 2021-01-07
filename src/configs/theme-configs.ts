const themeConfigs = {
  defaultSpacing: 8,
  palette: {
    primary: '#0077ff',
    secondary: '#4398fa',
    text: {
      primary: '#2a333d',
      secondary: '#a3acb8',
    },
    background: {
      default: '#ffffff',
      box: '#fefeff',
    },
  },
  spacing: function (step: number): number {
    return step * this.defaultSpacing;
  },
  fade: (color: string, alpha: number): string => `rgba(${color}, ${alpha})`,
};

export default themeConfigs;
