import { ChangeEvent } from "react";

export interface ISearchInput {
  query: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  //   placeholder: string;
  //   ref: any;
}
