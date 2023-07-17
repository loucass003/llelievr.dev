import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface TocItem {
    hash: string;
    label: string;
    childrens?: TocItem[];
}

export const useTocStore = defineStore('toc', () => {
    const toc = ref<TocItem[]>([]);

    const addItem = (item: TocItem, parentHash?: string) => {
        if (parentHash) {
            const found = toc.value.find(({ hash }) => hash === parentHash);
            if (!found)
                throw new Error(`Invalid item, the parent hash ${parentHash} does not exist`);
            if (!found.childrens)
                found.childrens = []
            found.childrens.push(item);
        } else {
            toc.value.push(item);
        }
    }

    return { toc, addItem }
})