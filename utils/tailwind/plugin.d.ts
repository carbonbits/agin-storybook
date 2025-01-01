interface AginPluginOptions {
    prefix?: string;
}
declare const _default: {
    (options: AginPluginOptions): {
        handler: import('tailwindcss/types/config').PluginCreator;
        config?: Partial<import('tailwindcss/types/config').Config>;
    };
    __isOptionsFunction: true;
};
export default _default;
