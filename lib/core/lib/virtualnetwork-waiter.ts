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
import { VirtualNetworkClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";
import { waitForWorkRequest, WorkRequestClient, responses } from "oci-workrequests";

export class VirtualNetworkWaiter {
  public constructor(
    private client: VirtualNetworkClient,
    private workRequestClient: WorkRequestClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forChangeDrgCompartment
   *
   * @param request the request to send
   * @return response returns ChangeDrgCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeDrgCompartment(
    request: serviceRequests.ChangeDrgCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeDrgCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeDrgCompartmentResponse = await this.client.changeDrgCompartment(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeDrgCompartmentResponse.opcWorkRequestId
    );
    return { response: changeDrgCompartmentResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forChangeSubnetCompartment
   *
   * @param request the request to send
   * @return response returns ChangeSubnetCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeSubnetCompartment(
    request: serviceRequests.ChangeSubnetCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeSubnetCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeSubnetCompartmentResponse = await this.client.changeSubnetCompartment(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeSubnetCompartmentResponse.opcWorkRequestId
    );
    return {
      response: changeSubnetCompartmentResponse,
      workRequestResponse: getWorkRequestResponse
    };
  }

  /**
   * Waits forChangeVcnCompartment
   *
   * @param request the request to send
   * @return response returns ChangeVcnCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeVcnCompartment(
    request: serviceRequests.ChangeVcnCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeVcnCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeVcnCompartmentResponse = await this.client.changeVcnCompartment(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeVcnCompartmentResponse.opcWorkRequestId
    );
    return { response: changeVcnCompartmentResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forChangeVlanCompartment
   *
   * @param request the request to send
   * @return response returns ChangeVlanCompartmentResponse, GetWorkRequestResponse tuple
   */
  public async forChangeVlanCompartment(
    request: serviceRequests.ChangeVlanCompartmentRequest
  ): Promise<{
    response: serviceResponses.ChangeVlanCompartmentResponse;
    workRequestResponse: responses.GetWorkRequestResponse;
  }> {
    const changeVlanCompartmentResponse = await this.client.changeVlanCompartment(request);
    const getWorkRequestResponse = await waitForWorkRequest(
      this.config,
      this.workRequestClient,
      changeVlanCompartmentResponse.opcWorkRequestId
    );
    return { response: changeVlanCompartmentResponse, workRequestResponse: getWorkRequestResponse };
  }

  /**
   * Waits forCrossConnect till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCrossConnectResponse | null (null in case of 404 response)
   */
  public async forCrossConnect(
    request: serviceRequests.GetCrossConnectRequest,
    ...targetStates: models.CrossConnect.LifecycleState[]
  ): Promise<serviceResponses.GetCrossConnectResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCrossConnect(request),
      response => targetStates.exists(response.crossConnect.lifecycleState),
      targetStates.includes(models.CrossConnect.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forCrossConnectGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCrossConnectGroupResponse | null (null in case of 404 response)
   */
  public async forCrossConnectGroup(
    request: serviceRequests.GetCrossConnectGroupRequest,
    ...targetStates: models.CrossConnectGroup.LifecycleState[]
  ): Promise<serviceResponses.GetCrossConnectGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCrossConnectGroup(request),
      response => targetStates.exists(response.crossConnectGroup.lifecycleState),
      targetStates.includes(models.CrossConnectGroup.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDhcpOptions till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDhcpOptionsResponse | null (null in case of 404 response)
   */
  public async forDhcpOptions(
    request: serviceRequests.GetDhcpOptionsRequest,
    ...targetStates: models.DhcpOptions.LifecycleState[]
  ): Promise<serviceResponses.GetDhcpOptionsResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDhcpOptions(request),
      response => targetStates.exists(response.dhcpOptions.lifecycleState),
      targetStates.includes(models.DhcpOptions.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDrg till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDrgResponse | null (null in case of 404 response)
   */
  public async forDrg(
    request: serviceRequests.GetDrgRequest,
    ...targetStates: models.Drg.LifecycleState[]
  ): Promise<serviceResponses.GetDrgResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDrg(request),
      response => targetStates.exists(response.drg.lifecycleState),
      targetStates.includes(models.Drg.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forDrgAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDrgAttachmentResponse
   */
  public async forDrgAttachment(
    request: serviceRequests.GetDrgAttachmentRequest,
    ...targetStates: models.DrgAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetDrgAttachmentResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getDrgAttachment(request),
      response => targetStates.exists(response.drgAttachment.lifecycleState)
    );
  }

  /**
   * Waits forFlowLogConfig till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFlowLogConfigResponse | null (null in case of 404 response)
   */
  public async forFlowLogConfig(
    request: serviceRequests.GetFlowLogConfigRequest,
    ...targetStates: models.FlowLogConfig.LifecycleState[]
  ): Promise<serviceResponses.GetFlowLogConfigResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFlowLogConfig(request),
      response => targetStates.exists(response.flowLogConfig.lifecycleState),
      targetStates.includes(models.FlowLogConfig.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forFlowLogConfigAttachment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFlowLogConfigAttachmentResponse | null (null in case of 404 response)
   */
  public async forFlowLogConfigAttachment(
    request: serviceRequests.GetFlowLogConfigAttachmentRequest,
    ...targetStates: models.FlowLogConfigAttachment.LifecycleState[]
  ): Promise<serviceResponses.GetFlowLogConfigAttachmentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFlowLogConfigAttachment(request),
      response => targetStates.exists(response.flowLogConfigAttachment.lifecycleState),
      targetStates.includes(models.FlowLogConfigAttachment.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forIPSecConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIPSecConnectionResponse | null (null in case of 404 response)
   */
  public async forIPSecConnection(
    request: serviceRequests.GetIPSecConnectionRequest,
    ...targetStates: models.IPSecConnection.LifecycleState[]
  ): Promise<serviceResponses.GetIPSecConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIPSecConnection(request),
      response => targetStates.exists(response.iPSecConnection.lifecycleState),
      targetStates.includes(models.IPSecConnection.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forIPSecConnectionTunnel till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIPSecConnectionTunnelResponse | null (null in case of 404 response)
   */
  public async forIPSecConnectionTunnel(
    request: serviceRequests.GetIPSecConnectionTunnelRequest,
    ...targetStates: models.IPSecConnectionTunnel.LifecycleState[]
  ): Promise<serviceResponses.GetIPSecConnectionTunnelResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIPSecConnectionTunnel(request),
      response => targetStates.exists(response.iPSecConnectionTunnel.lifecycleState),
      targetStates.includes(models.IPSecConnectionTunnel.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forInternetGateway till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInternetGatewayResponse | null (null in case of 404 response)
   */
  public async forInternetGateway(
    request: serviceRequests.GetInternetGatewayRequest,
    ...targetStates: models.InternetGateway.LifecycleState[]
  ): Promise<serviceResponses.GetInternetGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInternetGateway(request),
      response => targetStates.exists(response.internetGateway.lifecycleState),
      targetStates.includes(models.InternetGateway.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forIpv6 till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIpv6Response | null (null in case of 404 response)
   */
  public async forIpv6(
    request: serviceRequests.GetIpv6Request,
    ...targetStates: models.Ipv6.LifecycleState[]
  ): Promise<serviceResponses.GetIpv6Response | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIpv6(request),
      response => targetStates.exists(response.ipv6.lifecycleState),
      targetStates.includes(models.Ipv6.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forLocalPeeringGatewayonPeeringStatus till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLocalPeeringGatewayResponse | null (null in case of 404 response)
   */
  public async forLocalPeeringGatewayonPeeringStatus(
    request: serviceRequests.GetLocalPeeringGatewayRequest,
    ...targetStates: models.LocalPeeringGateway.PeeringStatus[]
  ): Promise<serviceResponses.GetLocalPeeringGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLocalPeeringGateway(request),
      response => targetStates.exists(response.localPeeringGateway.peeringStatus),
      targetStates.includes(models.LocalPeeringGateway.PeeringStatus.Revoked)
    );
  }

  /**
   * Waits forLocalPeeringGatewayonLifecycleState till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLocalPeeringGatewayResponse | null (null in case of 404 response)
   */
  public async forLocalPeeringGatewayonLifecycleState(
    request: serviceRequests.GetLocalPeeringGatewayRequest,
    ...targetStates: models.LocalPeeringGateway.LifecycleState[]
  ): Promise<serviceResponses.GetLocalPeeringGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLocalPeeringGateway(request),
      response => targetStates.exists(response.localPeeringGateway.lifecycleState),
      targetStates.includes(models.LocalPeeringGateway.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forNatGateway till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNatGatewayResponse | null (null in case of 404 response)
   */
  public async forNatGateway(
    request: serviceRequests.GetNatGatewayRequest,
    ...targetStates: models.NatGateway.LifecycleState[]
  ): Promise<serviceResponses.GetNatGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNatGateway(request),
      response => targetStates.exists(response.natGateway.lifecycleState),
      targetStates.includes(models.NatGateway.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forNetworkSecurityGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNetworkSecurityGroupResponse | null (null in case of 404 response)
   */
  public async forNetworkSecurityGroup(
    request: serviceRequests.GetNetworkSecurityGroupRequest,
    ...targetStates: models.NetworkSecurityGroup.LifecycleState[]
  ): Promise<serviceResponses.GetNetworkSecurityGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNetworkSecurityGroup(request),
      response => targetStates.exists(response.networkSecurityGroup.lifecycleState),
      targetStates.includes(models.NetworkSecurityGroup.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forPublicIp till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPublicIpResponse | null (null in case of 404 response)
   */
  public async forPublicIp(
    request: serviceRequests.GetPublicIpRequest,
    ...targetStates: models.PublicIp.LifecycleState[]
  ): Promise<serviceResponses.GetPublicIpResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPublicIp(request),
      response => targetStates.exists(response.publicIp.lifecycleState),
      targetStates.includes(models.PublicIp.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forRemotePeeringConnectiononLifecycleState till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRemotePeeringConnectionResponse | null (null in case of 404 response)
   */
  public async forRemotePeeringConnectiononLifecycleState(
    request: serviceRequests.GetRemotePeeringConnectionRequest,
    ...targetStates: models.RemotePeeringConnection.LifecycleState[]
  ): Promise<serviceResponses.GetRemotePeeringConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRemotePeeringConnection(request),
      response => targetStates.exists(response.remotePeeringConnection.lifecycleState),
      targetStates.includes(models.RemotePeeringConnection.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forRemotePeeringConnectiononPeeringStatus till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRemotePeeringConnectionResponse | null (null in case of 404 response)
   */
  public async forRemotePeeringConnectiononPeeringStatus(
    request: serviceRequests.GetRemotePeeringConnectionRequest,
    ...targetStates: models.RemotePeeringConnection.PeeringStatus[]
  ): Promise<serviceResponses.GetRemotePeeringConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRemotePeeringConnection(request),
      response => targetStates.exists(response.remotePeeringConnection.peeringStatus),
      targetStates.includes(models.RemotePeeringConnection.PeeringStatus.Revoked)
    );
  }

  /**
   * Waits forRouteTable till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRouteTableResponse | null (null in case of 404 response)
   */
  public async forRouteTable(
    request: serviceRequests.GetRouteTableRequest,
    ...targetStates: models.RouteTable.LifecycleState[]
  ): Promise<serviceResponses.GetRouteTableResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRouteTable(request),
      response => targetStates.exists(response.routeTable.lifecycleState),
      targetStates.includes(models.RouteTable.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forSecurityList till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSecurityListResponse | null (null in case of 404 response)
   */
  public async forSecurityList(
    request: serviceRequests.GetSecurityListRequest,
    ...targetStates: models.SecurityList.LifecycleState[]
  ): Promise<serviceResponses.GetSecurityListResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSecurityList(request),
      response => targetStates.exists(response.securityList.lifecycleState),
      targetStates.includes(models.SecurityList.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forServiceGateway till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetServiceGatewayResponse | null (null in case of 404 response)
   */
  public async forServiceGateway(
    request: serviceRequests.GetServiceGatewayRequest,
    ...targetStates: models.ServiceGateway.LifecycleState[]
  ): Promise<serviceResponses.GetServiceGatewayResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getServiceGateway(request),
      response => targetStates.exists(response.serviceGateway.lifecycleState),
      targetStates.includes(models.ServiceGateway.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forSubnet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSubnetResponse | null (null in case of 404 response)
   */
  public async forSubnet(
    request: serviceRequests.GetSubnetRequest,
    ...targetStates: models.Subnet.LifecycleState[]
  ): Promise<serviceResponses.GetSubnetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSubnet(request),
      response => targetStates.exists(response.subnet.lifecycleState),
      targetStates.includes(models.Subnet.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forVcn till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVcnResponse | null (null in case of 404 response)
   */
  public async forVcn(
    request: serviceRequests.GetVcnRequest,
    ...targetStates: models.Vcn.LifecycleState[]
  ): Promise<serviceResponses.GetVcnResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVcn(request),
      response => targetStates.exists(response.vcn.lifecycleState),
      targetStates.includes(models.Vcn.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forVirtualCircuit till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVirtualCircuitResponse | null (null in case of 404 response)
   */
  public async forVirtualCircuit(
    request: serviceRequests.GetVirtualCircuitRequest,
    ...targetStates: models.VirtualCircuit.LifecycleState[]
  ): Promise<serviceResponses.GetVirtualCircuitResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVirtualCircuit(request),
      response => targetStates.exists(response.virtualCircuit.lifecycleState),
      targetStates.includes(models.VirtualCircuit.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forVlan till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVlanResponse | null (null in case of 404 response)
   */
  public async forVlan(
    request: serviceRequests.GetVlanRequest,
    ...targetStates: models.Vlan.LifecycleState[]
  ): Promise<serviceResponses.GetVlanResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVlan(request),
      response => targetStates.exists(response.vlan.lifecycleState),
      targetStates.includes(models.Vlan.LifecycleState.Terminated)
    );
  }

  /**
   * Waits forVnic till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetVnicResponse | null (null in case of 404 response)
   */
  public async forVnic(
    request: serviceRequests.GetVnicRequest,
    ...targetStates: models.Vnic.LifecycleState[]
  ): Promise<serviceResponses.GetVnicResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getVnic(request),
      response => targetStates.exists(response.vnic.lifecycleState),
      targetStates.includes(models.Vnic.LifecycleState.Terminated)
    );
  }
}
