/**
 * TEAM: frontend_infra
 * @flow
 */

import {type DemoFile} from "../../design_system/types/demoTypes";
import NotificationModalBasic from "./NotificationModalBasic.demo";

const demos: DemoFile = {
  demos: [
    {
      type: "live",
      fullWidth: true,
      example: NotificationModalBasic,
    },
  ],
};

export default demos;
