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
 * @class
 * Initializes a new instance of the ResourceGroupProperties class.
 * @constructor
 * The resource group properties.
 *
 * @member {string} [provisioningState] Gets resource group provisioning state.
 * 
 */
function ResourceGroupProperties() {
}

/**
 * Defines the metadata of ResourceGroupProperties
 *
 * @returns {object} metadata of ResourceGroupProperties
 *
 */
ResourceGroupProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceGroupProperties',
    type: {
      name: 'Composite',
      className: 'ResourceGroupProperties',
      modelProperties: {
        provisioningState: {
          required: false,
          readOnly: true,
          serializedName: 'provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResourceGroupProperties;