const fs = require('fs');
const filesize = require('filesize');
const chalk = require('chalk');
const penthouse = require('penthouse');

const DEV_MODE = process.env.NODE_ENV !== 'production';

class CriticalCssPlugin {
    constructor(config = {}) {
        this.url = config.url;
        this.pathToBundle = config.pathToBundle || './web/css/bundle.css';
        this.outputPath = config.outputPath || './web/css/bundle.critical.css';
    }

    apply(compiler) {
        if (!DEV_MODE) {
            compiler.hooks.done.tapPromise('Critical Css Bundle Plugin', compilation => {
                return new Promise((resolve, reject) => {
                    const styleBundle = fs.readFileSync(this.pathToBundle);
                    const fileRegexp = /[^\/]+\.css$/;
                    const bundleName = this.pathToBundle.match(fileRegexp)[0];
                    const outputBundleName = this.outputPath.match(fileRegexp)[0];

                    const bundleSize = styleBundle.toString().length;
                    console.log(chalk.cyan.bold('Critical CSS Plugin'));
                    console.log('Size of ' + chalk.bold(`${bundleName}: `) + chalk.cyan.bold(filesize(bundleSize, {round: 0})));
                    console.log('Generating critical css...');
                    penthouse({
                        url: this.url,
                        cssString: styleBundle + '',
                        width: 1920,
                        height: 1000,
                        renderWaitTime: 6000,
                        blockJSRequests: true
                    }).then(criticalCss => {
                        const criticalSize = criticalCss.length;
                        console.log('Size of ' + chalk.bold(`${outputBundleName}: `) + chalk.cyan.bold(filesize(criticalSize, {round: 0})));
                        console.log('Saved: ' + chalk.cyan.bold(filesize(bundleSize - criticalSize, {round: 0})) + "\n");
                        fs.writeFileSync(this.outputPath, criticalCss);
                        setTimeout(() => {
                            resolve();
                        }, 1500);
                    });
                });
            });
        } else {
            fs.writeFileSync(this.outputPath, '');
        }
    }
}

module.exports = CriticalCssPlugin;
