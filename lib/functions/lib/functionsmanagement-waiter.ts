/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { FunctionsManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class FunctionsManagementWaiter {
  public constructor(
    private client: FunctionsManagementClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forApplication till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApplicationResponse | null (null in case of 404 response)
   */
  public async forApplication(
    request: serviceRequests.GetApplicationRequest,
    ...targetStates: models.Application.LifecycleState[]
  ): Promise<serviceResponses.GetApplicationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApplication(request),
      response => targetStates.exists(response.application.lifecycleState),
      targetStates.includes(models.Application.LifecycleState.DELETED)
    );
  }

  /**
   * Waits forFunction till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFunctionResponse | null (null in case of 404 response)
   */
  public async forFunction(
    request: serviceRequests.GetFunctionRequest,
    ...targetStates: models.Function.LifecycleState[]
  ): Promise<serviceResponses.GetFunctionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFunction(request),
      response => targetStates.exists(response.function.lifecycleState),
      targetStates.includes(models.Function.LifecycleState.DELETED)
    );
  }
}