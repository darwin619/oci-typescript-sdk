/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model for a summary of an Oracle Cloud Infrastructure Marketplace listing.
 */
export interface ListingSummary {
  /**
   * The unique identifier for the listing in Marketplace.
   */
  "id"?: string;
  /**
   * The name of the listing.
   */
  "name"?: string;
  /**
   * A short description of the listing.
   */
  "shortDescription"?: string;
  /**
   * The tagline of the listing.
   */
  "tagline"?: string;
  "icon"?: model.UploadData;
  /**
   * The listing's package type.
   */
  "packageType"?: model.PackageTypeEnum;
  /**
   * Summary of the pricing types available across all packages in the listing.
   */
  "pricingTypes"?: Array<ListingSummary.PricingTypes>;
  /**
   * The regions where the listing is eligible to be deployed.
   */
  "regions"?: Array<model.Region>;
  /**
   * Indicates whether the listing is featured.
   */
  "isFeatured"?: boolean;
  /**
   * Product categories that the listing belongs to.
   */
  "categories"?: Array<string>;
  "publisher"?: model.PublisherSummary;
}

export namespace ListingSummary {
  export enum PricingTypes {
    FREE = "FREE",
    BYOL = "BYOL",
    PAYGO = "PAYGO",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ListingSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "icon": obj.icon ? model.UploadData.getJsonObj(obj.icon) : undefined,

        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined,

        "publisher": obj.publisher ? model.PublisherSummary.getJsonObj(obj.publisher) : undefined
      }
    };

    return jsonObj;
  }
}