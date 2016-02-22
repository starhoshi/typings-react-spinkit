/// <reference path="typings/main.d.ts" />
/// <reference path="react-spinkit.d.ts" />
import * as React from "react";
import * as Spinner from 'react-spinkit';

function highlighter() {
  return (
    <Spinner spinnerName='three-bounce' overrideSpinnerClassName="spinner center-block" />
  );
}
