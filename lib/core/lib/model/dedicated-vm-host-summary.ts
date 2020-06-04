/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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
 * A dedicated virtual machine (VM) host that enables you to host multiple instances on a dedicated host instance that is not shared with other tenancies.
 *
 */
export interface DedicatedVmHostSummary {
  /**
    * The availability domain the dedicated VM host is running in.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The OCID of the compartment that contains the dedicated VM host.
   *
   */
  "compartmentId": string;
  /**
   * The shape of the dedicated VM host. The shape determines the number of CPUs and
   * other resources available for VMs.
   *
   */
  "dedicatedVmHostShape": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: `My DVH`
* 
    */
  "displayName": string;
  /**
    * The fault domain for the dedicated VM host's assigned instances. For more information, see Fault Domains.
* <p>
If you do not specify the fault domain, the system selects one for you. To change the fault domain for a dedicated VM host,
* delete it and create a new dedicated VM host in the preferred fault domain.
* <p>
To get a list of fault domains, use the ListFaultDomains operation in the Identity and Access Management Service API.
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
   * The OCID of the dedicated VM host.
   *
   */
  "id": string;
  /**
   * The current state of the dedicated VM host.
   *
   */
  "lifecycleState": DedicatedVmHostSummary.LifecycleState;
  /**
    * The date and time the dedicated VM host was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
  /**
   * The current available OCPUs of the dedicated VM host.
   *
   */
  "remainingOcpus": number;
  /**
   * The current total OCPUs of the dedicated VM host.
   *
   */
  "totalOcpus": number;
}

export namespace DedicatedVmHostSummary {
  export enum LifecycleState {
    CREATING = "CREATING",
    ACTIVE = "ACTIVE",
    UPDATING = "UPDATING",
    DELETING = "DELETING",
    DELETED = "DELETED",
    FAILED = "FAILED",

    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UNKNOWN_VALUE = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DedicatedVmHostSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}