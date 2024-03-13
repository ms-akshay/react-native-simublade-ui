import React from "react";
import { View } from "react-native";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { Meta, StoryObj } from "@storybook/react";

const MultiSelectDropdownMeta: Meta<typeof MultiSelectDropdown> = {
    title: "MultiSelector",
    component: MultiSelectDropdown,
    argTypes: {
        onClosePopup: { action: "Closed the popup" },
    },
    args: {},
    decorators: [
        (Story) => (
            <View
                style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
            >
                <Story />
            </View>
        ),
    ],
};

// Export the Meta
export default MultiSelectDropdownMeta;

// Define the stories
export const WithSavedPList: StoryObj<typeof MultiSelectDropdown> = {
    argTypes: {
        onClosePopup: { action: "Closed the popup" },
    },
    args: {
        dropDownList: [{
            id: '1',
            Choose: false,
            Name: 'Pikachu',
            Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
          }, {
            id: '2',
            Choose: false,
            Name: 'Charmander',
            Avatar: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png'
          }, {
            id: '3',
            Choose: false,
            Name: 'Bulbasaur',
            Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
          }, {
            id: '4',
            Choose: false,
            Name: 'Squirtle',
            Avatar: 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
          }, {
            id: '5',
            Choose: false,
            Name: 'Jigglypuff',
            Avatar: 'https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png'
        }],
    },
}
export const WithDropDownPList: StoryObj<typeof MultiSelectDropdown> = {
    argTypes: {
        onClosePopup: { action: "Closed the popup" },
    },
    args: {
        dropDownList: [{
            id: '1',
            Choose: false,
            Name: 'Pikachu',
            Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
          }, {
            id: '2',
            Choose: false,
            Name: 'Charmander',
            Avatar: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png'
          }, {
            id: '3',
            Choose: false,
            Name: 'Bulbasaur',
            Avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png'
          }, {
            id: '4',
            Choose: false,
            Name: 'Squirtle',
            Avatar: 'https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
          }, {
            id: '5',
            Choose: false,
            Name: 'Jigglypuff',
            Avatar: 'https://cdn.bulbagarden.net/upload/3/3e/039Jigglypuff.png'
        }]
    }
}
// export const WithMultiSelectPopup: MultiSelectorStory = (args) => (
//     <MultiSelector {...args} multiSelectPopup={true} />
// );

