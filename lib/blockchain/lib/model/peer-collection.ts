/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Plane API
 * OpenAPI spec version: 20191010
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Result of a peer list or search. Contains PeerSummary
 */
export interface PeerCollection {
  /**
   * Collection of PeerSummary
   */
  "items": Array<model.PeerSummary>;
}

export namespace PeerCollection {
  export function getJsonObj(obj: PeerCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.PeerSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}