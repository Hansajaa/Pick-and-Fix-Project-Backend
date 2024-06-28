const log = (value) => {
    console.log(`LOG : Pick & Fix Backend ${new Date(Date.now())} : ${value}`);
}

const error = (value) => {
    console.log(`ERROR : Pick & Fix Backend ${new Date(Date.now())} : ${value}`);
}

const info = (value) => {
    console.log(`INFO : Pick & Fix Backend ${new Date(Date.now())} : ${value}`);
}

const warning = (value) => {
    console.log(`WARNING : Pick & Fix Backend ${new Date(Date.now())} : ${value}`);
}

const success = (value) => {
    console.log(`SUCCESS : Pick & Fix Backend ${new Date(Date.now())} : ${value}`);
}

module.exports.log = log;
module.exports.error = error;
module.exports.info = info;
module.exports.warning = warning;
module.exports.success = success;