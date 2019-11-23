const autoprefixer = require('autoprefixer');

module.exports = [{
  entry: './scss/app.scss',
    output: {
    // This is necessary for webpack to compile,
    // but we never use style-bundle.js.
    filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'dist/fonts/'
            }
          }
        ]
        },
        {
          test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['./node_modules']
              }
            }
          },
        ]
      }]
    },
  },
  // {
  //   entry: './src/js/app.js',
  //   output: {
  //     filename: './dist/js/bundle.js',
  //   },
  //   module: {
  //     rules: [{
  //       test: /\.js$/,
  //       loader: 'babel-loader',
  //       query: {
  //         presets: ['es2015'],
  //       },
  //     }],
  //   },
  // },
  // {
  //   entry: '.src/ts/app.ts',
  //   output: {
  //     filename: './dist/js/bundle.js',
  //     path: path.resolve(__dirname, 'dist/js')
  //   },
  //     module: {
  //       rules: [{
  //         test: /\.tsx?$/,
  //         use: 'ts-loader',
  //         exclude: /node_modules/,
  //       }],
  //     },
  //   resolve: {
  //     extensions: ['.ts', '.tsx'],
  //   },

  // }
];
