/**
 * TEAM: frontend_infra
 * WATCHERS: uforic
 *
 * @flow
 */

import * as React from "react";
import {storiesOf} from "@storybook/react";
import {text, boolean, withKnobs} from "@storybook/addon-knobs";
import sections from "../sections";
import Multiselect from "../../select/MultiselectInput";
import Label from "../../Label";

const stories = storiesOf(`${sections.dataEntry}/MultiSelect Input`, module);
stories.addDecorator(withKnobs);
stories.add("Multiselect", () => (
  <MultiselectHoist {...getMultiselectKnobs()} />
));

export const getMultiselectKnobs = () => ({
  disabled: boolean("disabled", false),
  isInvalid: boolean("isInvalid", false),
  someSelectedUnits: text("someSelectedUnits", undefined),
});

const options = [
  {
    value: {not_key: "id1"},
    label: "First option",
    disabled: false,
    iconName: "satellite",
  },
  {
    value: {not_key: "id2"},
    label: "Second option",
    disabled: true,
    iconName: "cancel",
  },
  {
    value: {not_key: "id3"},
    label: "Third option",
    disabled: false,
    iconName: "ship",
  },
  {
    value: {not_key: "id4"},
    label: "Fourth option",
    disabled: false,
    iconName: "rail",
  },
];
class MultiselectHoist extends React.Component<
  *,
  {
    values: $ReadOnlyArray<{not_key: string}>,
  }
> {
  constructor() {
    super();
    this.state = {
      values: [options[2].value],
    };
  }

  handleChange = (values: $ReadOnlyArray<string>) => {
    const selectedValues = values
      .map(value => {
        const foundOption = options.find(
          element => value === element.value.not_key
        );
        return foundOption ? foundOption.value : null;
      })
      .filter(Boolean);
    this.setState({values: selectedValues.filter(Boolean)});
  };

  handleRecordChange = (values: $ReadOnlyArray<{not_key: string}>) => {
    this.setState({values});
  };

  render() {
    return (
      <div style={{width: 200}}>
        <Label value="Record multiselect">
          <Multiselect
            values={this.state.values}
            options={options}
            onChange={this.handleRecordChange}
            toKeyFn={option => option.not_key}
            {...this.props}
          />
        </Label>
      </div>
    );
  }
}
