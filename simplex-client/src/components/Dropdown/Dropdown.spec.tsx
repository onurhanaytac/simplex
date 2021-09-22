import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";

import Dropdown from "./Dropdown";

const DropdownTest = () => {
  const [value, setValue] = useState("USD");
  const codes = ["USD", "EUR", "GBP", "ILS"];
  const onChange = ({ target }: any) => {
    setValue(target.value);
  };

  return (
    <Dropdown
      testId="dropdown-test-id"
      label="Base Currency"
      data={codes}
      value={value}
      onChange={onChange}
    />
  );
};

describe("<Dropdown />", () => {
  it("should set value USD to ILS", () => {
    const { getByTestId } = render(<DropdownTest />);

    const dropdown = getByTestId("dropdown-test-id");

    expect(dropdown).toHaveValue("USD");
    fireEvent.change(dropdown, { target: { value: "ILS" } });
    expect(dropdown).toHaveValue("ILS");
    expect(dropdown).not.toHaveValue("USD");
  });
});
