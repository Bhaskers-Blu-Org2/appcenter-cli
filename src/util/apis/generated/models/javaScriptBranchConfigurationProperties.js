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
 * Build configuration when React Native, or other JavaScript tech, is part of
 * the build steps
 *
 */
class JavaScriptBranchConfigurationProperties {
  /**
   * Create a JavaScriptBranchConfigurationProperties.
   * @property {string} [packageJsonPath] Path to package.json file for the
   * main project, e.g. "package.json" or "myapp/package.json"
   * @property {boolean} [runTests] Whether to run Jest unit tests, via npm
   * test, during the build
   * @property {string} [reactNativeVersion] Version of React Native from
   * package.json files
   */
  constructor() {
  }

  /**
   * Defines the metadata of JavaScriptBranchConfigurationProperties
   *
   * @returns {object} metadata of JavaScriptBranchConfigurationProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JavaScriptBranchConfigurationProperties',
      type: {
        name: 'Composite',
        className: 'JavaScriptBranchConfigurationProperties',
        modelProperties: {
          packageJsonPath: {
            required: false,
            serializedName: 'packageJsonPath',
            type: {
              name: 'String'
            }
          },
          runTests: {
            required: false,
            serializedName: 'runTests',
            type: {
              name: 'Boolean'
            }
          },
          reactNativeVersion: {
            required: false,
            serializedName: 'reactNativeVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JavaScriptBranchConfigurationProperties;
