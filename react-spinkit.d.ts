// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/1031da9052398b3a431411f7a165b92bbf658c73/react-spinkit/react-spinkit.d.ts
// Type definitions for react-spinkit 1.1.4
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react-spinkit" {
  import { CSSProperties, Props, ComponentClass } from 'react';

  interface ISpinner extends Props<Spinner> {
    spinnerName?: string;
    overrideSpinnerClassName?: string;
  }

  interface Spinner extends ComponentClass<ISpinner> {
  }
  const Spinner:Spinner;

  export = Spinner;
}
