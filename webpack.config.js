const HtmlWebpackPlugin = require('html-webpack-plugin'); //creating dist/index.html automatically

module.exports = {
  mode: 'development',
  entry: './index.jsx',

  module: {
    rules: [
      { //rule 1
        test: /\.jsx?$/, //when files are .js or .jsx
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-react'] 
          }
        }
      }, 
      { //rule 2
        test: /\.css$/,  //when files are .css
        use: ["style-loader", "css-loader"], 
      },
      { //rule 3
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, //when pic small than 8192bytes，use dataurl
            },
          },
        ],
      },
    ]
  },
  devServer: {
    static: "./", //files stored in root
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', //set a template for dist/index.html
    }),
  ],
}