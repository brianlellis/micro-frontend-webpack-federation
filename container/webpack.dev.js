const { merge }               = require( 'webpack-merge' );
const HtmlWebpackPlugin       = require( 'html-webpack-plugin' );
const commonConfig            = require( './webpack.common' );
const ModuleFederationPlugin  = require( 'webpack/lib/container/ModuleFederationPlugin');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback:  {
      index: 'index.html'
    }
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name:     'container',
      filename: 'remoteEntry.js',
      remotes: {
        marketing: 'marketing@http://localhost:3001/remoteEntry.js'
      },
      exposes: {
        './ContainerEcomm': './src/bootstrap'
      },
      shared: [ 'react' , 'react-dom' ]
    })
  ]
};

module.exports = merge( commonConfig ,  devConfig );