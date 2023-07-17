import { defineStore } from 'pinia'
import { onBeforeUnmount, onDeactivated, onMounted, ref } from 'vue'

export interface TocItem {
    hash: string;
    label: string;
    childrens?: TocItem[];
}

export const useTocStore = defineStore('toc', () => {
    const toc = ref<TocItem[]>([]);
    const activeHash = ref<string | undefined>();
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

    const onScrollEvent = () => {
        const items = toc.value
            .reduce<TocItem[]>((curr, item) => ([...curr, item, ...item.childrens || []]), [])
            .map((item) => ({ item, elem: document.getElementById(item.hash) }))
            .map(({ item, elem }) => {
                if (!elem)
                    return { item, active: false };
                return { item, active: window.scrollY + elem.offsetHeight > elem.offsetTop }
            });
        activeHash.value = items.reverse().find(({ active }) => active)?.item.hash
    }

    onMounted(() => {
        window.addEventListener('scroll', onScrollEvent);
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', onScrollEvent);

    })


    return { toc, activeHash, addItem }
})