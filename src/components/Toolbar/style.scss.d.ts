declare namespace StyleScssModule {
  export interface IStyleScss {
    buttons: string;
    error: string;
    header: string;
    idle: string;
    main: string;
    mainButton: string;
    success: string;
  }
}

declare const StyleScssModule: StyleScssModule.IStyleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleScssModule.IStyleScss;
};

export = StyleScssModule;
