/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * The list of [services supported for use with Resource Discovery](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
 *
 */
export interface ResourceDiscoveryServiceCollection {
  /**
   * Collection of supported services for Resource Discovery.
   */
  "items": Array<model.ResourceDiscoveryServiceSummary>;
}

export namespace ResourceDiscoveryServiceCollection {
  export function getJsonObj(obj: ResourceDiscoveryServiceCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceDiscoveryServiceSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
