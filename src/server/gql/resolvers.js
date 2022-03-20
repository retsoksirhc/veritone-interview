import storage from 'node-persist';
import { v4 as uuid } from 'uuid';

const STORAGE_KEY = 'shopping-list-store';

storage.init({
    dir: 'storage',
    encoding: 'utf8'
});

const getStorage = async () => await storage.getItem(STORAGE_KEY) || [];
const setStorage = (data) => storage.setItem(STORAGE_KEY, data);
const findItemIndex = (items, id) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        throw new Error(`Item ID ${id} was not found`);
    }
    return index;
}

export default {
    addItem: async ({ item }) => {
        const items = await getStorage();
        const id = uuid();
        items.push({ ...item, id });
        setStorage(items);
        return { ...item, id };
    },
    updateItem: async ({ id, item }) => {
        const items = await getStorage();
        const index = findItemIndex(items, id);
        items.splice(index, 1, { ...item, id })
        setStorage(items);
        return items[index];
    },
    deleteItem: async ({ id }) => {
        const items = await getStorage();
        const index = findItemIndex(items, id);
        items.splice(index, 1)
        setStorage(items);
        return id;
    },
    getItems: async () => await getStorage()
};
