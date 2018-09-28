set -xe

yarn install
rm -rf LA_TEMP
./helpers/cli/bin.js create react-app LA_TEMP
