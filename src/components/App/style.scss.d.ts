declare namespace StyleScssModule {
  export interface IStyleScss {
    block: string;
    blockLayout: string;
    dictionary: string;
    layout: string;
    main: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
