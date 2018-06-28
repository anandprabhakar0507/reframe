import React from 'react';
import Header from '../../views/Header';
import CharacterList from './views/CharacterList';
import getJson from './getJson';

// We load the list of characters from a remote server.
const getCharacters = async () => {
    const url = 'https://cors.io/?https://brillout-misc.github.io/game-of-thrones/characters/list.json';
    const characters = await getJson(url);
    return characters;
};

// We use a stateful component to load async data
class CharactersView extends React.Component {
    render() {
        if( ! this.state || this.state.characters===undefined ) {
            return <div>Loading...</div>;
        }
        return <CharacterList characters={this.state.characters}/>;
    }
    async componentDidMount() {
        const characters = await getCharacters();
        this.setState({characters});
    }
}

// Our loaded list is then available at `props.characters`.
const GameOfThronesView = () => (
    <div>
        <Header/>
        <CharactersView />
    </div>
);

export default {
    route: '/game-of-thrones',
    view: GameOfThronesView,

    // We don't need to render the page in the browser as it doesn't contain any interactive views
    doNotRenderInBrowser: true,
};
