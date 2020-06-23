/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the data operation.
 */
export interface AbstractDataOperationConfig {
  "modelType": string;
}

export namespace AbstractDataOperationConfig {
  export function getJsonObj(obj: AbstractDataOperationConfig): object {
    const jsonObj = { ...obj, ...{} };

    if ("modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "WRITE_OPERATION_CONFIG":
          return model.WriteOperationConfig.getJsonObj(
            <model.WriteOperationConfig>(<object>jsonObj),
            true
          );
        case "READ_OPERATION_CONFIG":
          return model.ReadOperationConfig.getJsonObj(
            <model.ReadOperationConfig>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.modelType);
      }
    }
    return jsonObj;
  }
}