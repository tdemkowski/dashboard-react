const reqIcons = require.context("./Images/Icons/", true, /\.svg$/);
const icons = reqIcons.keys().map(path => ({ path, file: reqIcons(path) }));

export default icons