/*
const {LandingPage} = require('../../easy/pages/LandingPage');
const {AboutPage} = require('../../easy/pages/AboutPage');
const {GameOfThronesPage} = require('../../easy/pages/GameOfThronesPage');
const {GameOfThronesCharacterPage} = require('../../easy/pages/GameOfThronesCharacterPage');

module.exports = [
    LandingPage,
    AboutPage,
    GameOfThronesPage,
    GameOfThronesCharacterPage,
];
*/
const {LandingPage} = require('../../easy/pages/LandingPage');
const {AboutPage} = require('../../easy/pages/AboutPage');
//const {GameOfThronesPage} = require('../../easy/pages/GameOfThronesPage');
const {GameOfThronesCharacterPage} = require('../../easy/pages/GameOfThronesCharacterPage');

module.exports = [
    LandingPage,
    AboutPage,
    //*
    {
        routeObject: {
            doesMatchUrl(url) {
                return url.pathname === '/game-of-thrones';
            },
            hasOnlyOneUniqueRoute() {
                return true;
            },
            getRouteUri() {
                return '/game-of-thrones';
            },
        },
        id: 'GameOfThronesPage',
        pageInfoLoader: async () => {
            const ret = await import('../../easy/pages/GameOfThronesPage');
            return ret.GameOfThronesPage;
        },
    },
    /*/
    GameOfThronesPage,
    //*/
    GameOfThronesCharacterPage,
];


function RepagePageLoader() {
    const pathname_to_page_id = {};
    pathname_to_page_id['/game-of-thrones'] = 'GameOfThronesPage';

    return {
        _cObject: {
            computedConfig: async () => {
                if( page_data_is_locally_available() ) {
                    await ensure_page_is_loaded();
                    return null;
                }
                return {
                    pageMixin: {
                        routeObject: {
                            doesMatchUrl,
                        },
                        renderToDom: {
                            _cObject: {
                                isDominant: true,
                                computedValue: renderToDom__computedValue,
                            },
                        },
                    },
                };
            },
        },
    };

    function doesMatchUrl(url, {id}) {
        const page_id = url.linkInfo['data-dynamic-link'] || pathname_to_page_id[url.pathname];
        return page_id===id;
    }

    async function renderToDom__computedValue({overwrittenValues, currentObject, objectParts, addObjectPart, args, that}) {
        const pageIsLoaded = overwrittenValues.length>0;
        if( ! pageIsLoaded ) {
            const pageInfo = await currentObject.pageLoader();
            assert_usage(
                pageInfo.renderToDom,
                pageInfo,
                "Loaded page information printed above is missing `renderToDom`",
            );
            addObjectPart(pageInfo);
            assert_internal(overwrittenValues.length>0);
        }
        const renderToDom = overwrittenValues.slice(-1);
        assert_internal(renderToDom);
        renderToDom.apply(that, args);
    }

    async function ensure_page_is_loaded() {
        if( ) {
        }
    }

    function page_data_is_locally_available() {
        if( typeof require === "undefined" ) {
            return false;
        }
        if( ! require.resolve ) {
            return false;
        }
        let fs_module_path;
        try {
            fs_module_path = require.resolve('fs');
        } catch(e) {
            return false;
        }
        if( ! fs_module_path ) {
            return false;
        }
        return true;
    }
}
