declare module '*.vue' {
    import type { ComponentOptions } from 'vue'

    const Component: ComponentOptions
    export default Component
}

declare module '*.md' {
    import type { ComponentOptions } from 'vue'

    const Component: ComponentOptions
    export default Component
}
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        count: number
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

// workaround found to fix the import error with vuex using typescript
// https://stackoverflow.com/questions/76196277/could-not-find-a-declaration-file-for-module-vuex-with-create-vue
declare module "vuex" {
    export * from "vuex/types/index.d.ts";
    export * from "vuex/types/helpers.d.ts";
    export * from "vuex/types/logger.d.ts";
    export * from "vuex/types/vue.d.ts";
}