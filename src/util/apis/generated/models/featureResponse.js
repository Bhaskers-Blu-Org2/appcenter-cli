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
 * Class representing a FeatureResponse.
 */
class FeatureResponse {
  /**
   * Create a FeatureResponse.
   * @property {string} [description] The description of the feature
   * @property {string} displayName The friendly name of the feature
   * @property {string} name The unique name of the feature
   * @property {number} state The state (unset, enabled, disabled) of the
   * feature
   * @property {string} [createdAt] The creation date of the feature
   * @property {string} [updatedAt] The date the feature was last updated at
   */
  constructor() {
  }

  /**
   * Defines the metadata of FeatureResponse
   *
   * @returns {object} metadata of FeatureResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FeatureResponse',
      type: {
        name: 'Composite',
        className: 'FeatureResponse',
        modelProperties: {
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'Number'
            }
          },
          createdAt: {
            required: false,
            serializedName: 'created_at',
            type: {
              name: 'String'
            }
          },
          updatedAt: {
            required: false,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FeatureResponse;
