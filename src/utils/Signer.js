const { execSync } = require('child_process');
const path = require('path');

const defaultOptions = {
    visible: true,
    page: 1,
    position: 0,
    reason: "I'm the author of this Document",
    location: "Toronto",
    urlImage: path.join(__dirname, '../assets/logo.png'),
    marginLeft: "415.0F",
    marginBottom: "180.0F"
};

const Signer = (pfx, passPfx, source = "", target = "", options = defaultOptions) => {
    return new Promise((resolve, reject) => {
        try {
            let config = Object.assign(defaultOptions, options);
            config.reason = config.reason.replace(/[\s]+/g, "_");
            config.location = config.location.replace(/[\s]+/g, "_");
            let jar = path.join(__dirname, './dist/Signature.jar');
            let command = `java -jar "${jar}" "PFX=${pfx};PASSPFX=${passPfx};SOURCE=${source};TARGET=${target}`;
            // Generate command
            for(let conf in config) {
                command += `;${conf.toUpperCase()}=${config[conf]}`;
            }
            command += `"`;
            // execute command
            execSync(command);
            // resolver
            resolve({
                realPath: target,
                message: "The pdf was signed correctly!"
            });
        } catch (error) {
            reject(error.message);
        }
    });
}

module.exports = Signer;
