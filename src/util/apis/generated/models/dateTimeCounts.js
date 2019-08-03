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
 * Class representing a DateTimeCounts.
 */
class DateTimeCounts {
  /**
   * Create a DateTimeCounts.
   * @property {string} [datetime] The ISO 8601 datetime.
   * @property {number} [count] Count of the object.
   */
  constructor() {
  }

  /**
   * Defines the metadata of DateTimeCounts
   *
   * @returns {object} metadata of DateTimeCounts
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DateTimeCounts',
      type: {
        name: 'Composite',
        className: 'DateTimeCounts',
        modelProperties: {
          datetime: {
            required: false,
            serializedName: 'datetime',
            type: {
              name: 'String'
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = DateTimeCounts;
