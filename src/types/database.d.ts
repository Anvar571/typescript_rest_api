// typelarning jamlanl=masi
export  interface ReadOutput {
  msg: "OK" | "ERR";
  body: Body;
}

export interface Body {
  title: string;
}
