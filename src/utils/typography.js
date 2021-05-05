import Typography from 'typography'

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.75,
  googleFonts: [
    {
      name: 'ZCOOL XiaoWei',
      styles: [
        '500'
      ],
    },
  ],
  headerFontFamily: [
    'ZCOOL XiaoWei',
  ],
  bodyFontFamily: [
    'Merriweather', 'Noto Serif JP',
  ],
})

export default typography