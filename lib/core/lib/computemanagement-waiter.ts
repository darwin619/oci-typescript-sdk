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

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { ComputeManagementClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";
import { waitForWorkRequest, WorkRequestClient, responses } from "oci-workrequests";

export class ComputeManagementWaiter {
  public constructor(
    private client: ComputeManagementClient,
    private workRequestClient: WorkRequestClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forCreateClusterNetwork
   *
   * @param request the request to send
   * @return response returns CreateClusterNetworkResponse, GetWorkRequestResponse tuple
   */
  public async forCreateClusterNetwork(
    request: serviceRequests.CreateClusterNetworkRequest
  ): Promise<{
    response: serviceResponses.CreateClusterNetworkResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const createClusterNetworkResponse = await this.client.createClusterNetwork(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      createClusterNetworkResponse.opcWorkRequestId
    );
    return { response: createClusterNetworkResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forClusterNetwork till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetClusterNetworkResponse | null (null in case of 404 response)
   */
  public async forClusterNetwork(
    request: serviceRequests.GetClusterNetworkRequest,
    ...targetStates: models.ClusterNetwork.LifecycleState[]
  ): Promise<serviceResponses.GetClusterNetworkResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getClusterNetwork(request),
      response => targetStates.exists(response.clusterNetwork.lifecycleState),
      targetStates.includes(models.ClusterNetwork.LifecycleState.TERMINATED)
    );
  }

  /**
   * Waits forInstancePool till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstancePoolResponse | null (null in case of 404 response)
   */
  public async forInstancePool(
    request: serviceRequests.GetInstancePoolRequest,
    ...targetStates: models.InstancePool.LifecycleState[]
  ): Promise<serviceResponses.GetInstancePoolResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInstancePool(request),
      response => targetStates.exists(response.instancePool.lifecycleState),
      targetStates.includes(models.InstancePool.LifecycleState.TERMINATED)
    );
  }

  /**
   * Waits forInstancePoolLoadBalancerAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInstancePoolLoadBalancerAttachmentResponse
   */
  public async forInstancePoolLoadBalancerAttachment(
    request: serviceRequests.GetInstancePoolLoadBalancerAttachmentRequest,
    ...targetStates: models.InstancePoolLoadBalancerAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetInstancePoolLoadBalancerAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getInstancePoolLoadBalancerAttachment(request),
      response => targetStates.exists(response.instancePoolLoadBalancerAttachment.lifecycleState)
    );
  }

  /**
   * Waits forLaunchInstanceConfiguration
   *
   * @param request the request to send
   * @return response returns LaunchInstanceConfigurationResponse, GetWorkRequestResponse tuple
   */
  public async forLaunchInstanceConfiguration(
    request: serviceRequests.LaunchInstanceConfigurationRequest
  ): Promise<{
    response: serviceResponses.LaunchInstanceConfigurationResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const launchInstanceConfigurationResponse = await this.client.launchInstanceConfiguration(
      request
    );
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      launchInstanceConfigurationResponse.opcWorkRequestId
    );
    return {
      response: launchInstanceConfigurationResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forTerminateClusterNetwork
   *
   * @param request the request to send
   * @return response returns TerminateClusterNetworkResponse, GetWorkRequestResponse tuple
   */
  public async forTerminateClusterNetwork(
    request: serviceRequests.TerminateClusterNetworkRequest
  ): Promise<{
    response: serviceResponses.TerminateClusterNetworkResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const terminateClusterNetworkResponse = await this.client.terminateClusterNetwork(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      terminateClusterNetworkResponse.opcWorkRequestId
    );
    return {
      response: terminateClusterNetworkResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }
}