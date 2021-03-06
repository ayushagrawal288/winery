/*******************************************************************************
 * Copyright (c) 2018 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *******************************************************************************/
export interface BlockchainElement {
    transactionHash: string;
    unixTimestamp: number;
}

export interface ProvenanceElement extends BlockchainElement {
    authorAddress: string;
    authorName: string;
    authorized: boolean;
}

export interface FileProvenanceElement extends ProvenanceElement {
    fileHash: string;
    addressInImmutableStorage: string;
    fileName: string;
}

export interface ModelProvenanceElement extends ProvenanceElement {
    fingerprint: string;
    files: FileProvenanceElement[];
}

export interface AuthorizationElement extends BlockchainElement {
    address: string;
    identity: string;
}

