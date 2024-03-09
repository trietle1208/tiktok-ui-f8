const { override, useBabelRc } = require('customize-cra');
const path = require('path');
module.exports = override(
    //use BabelRc file
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
);
