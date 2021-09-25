import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";

import NumberField from "./NumberField";

describe("<NumberField />", () => {
  it("should have call onChange", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <NumberField
        testId="numberfield-test-id"
        label="Number Field"
        onChange={onChange}
      />
    );

    const numberfield = getByTestId("numberfield-test-id");

    fireEvent.change(numberfield, { target: { value: "100" } });

    expect(numberfield).toHaveValue(100);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it("should not call onChange with invalid input", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <NumberField
        testId="numberfield-test-id"
        label="Number Field"
        onChange={onChange}
      />
    );

    const numberfield = getByTestId("numberfield-test-id");

    fireEvent.change(numberfield, { target: { value: "asd" } });

    expect(numberfield).not.toHaveValue("asd");
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
