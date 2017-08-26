import banner from './banner'
import babel from 'rollup-plugin-babel'

export default {
  name: 'Glide',
  input: 'src/Glide.js',
  output: {
    file: 'dist/glide.js',
    format: 'umd',
    banner
  },
  plugins: [
    babel()
  ]
}