/* eslint-disable prefer-const */
import { ICharacter } from "../types/api/character";

export const storeInLocalStorage = (item: ICharacter) => {
    // get the stored items from localStorage
    const storedItems = JSON.parse(localStorage.getItem("rickandmorty") || '[]');

    // Check if the item already exists in the stored items
    const existingIndex = isItemInLocalStorage(item)
    if (existingIndex !== -1) {
        // If the item exists, remove it from the stored items
        storedItems.splice(existingIndex, 1);
    } else {
        // Add the item to the stored items
        storedItems.push(item);
    }
    // Store the updated items in localStorage
    localStorage.setItem("rickandmorty", JSON.stringify(storedItems));
}


export const getFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('rickandmorty') as string);
}


export const isItemInLocalStorage = (item: ICharacter) => {
    const items = JSON.parse(localStorage.getItem('rickandmorty') || '[]');
    const index = items.findIndex((f: any) => f.id === item.id)
    return index
}