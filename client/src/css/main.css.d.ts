declare module '*.css' {
  interface ClassName {
    [className: string]: string
  }
  const className: ClassName
  export = className
}
