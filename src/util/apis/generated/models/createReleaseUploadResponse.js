/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a CreateReleaseUploadResponse.
 */
class CreateReleaseUploadResponse {
  /**
   * Create a CreateReleaseUploadResponse.
   * @property {uuid} id The ID for the newly created upload. It is going to be
   * required later in the process.
   * @property {string} uploadDomain The URL domain used to upload the release.
   * @property {string} token The URL encoded token used for upload
   * permissions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateReleaseUploadResponse
   *
   * @returns {object} metadata of CreateReleaseUploadResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateReleaseUploadResponse',
      type: {
        name: 'Composite',
        className: 'CreateReleaseUploadResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          uploadDomain: {
            required: true,
            serializedName: 'upload_domain',
            type: {
              name: 'String'
            }
          },
          token: {
            required: true,
            serializedName: 'token',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateReleaseUploadResponse;
