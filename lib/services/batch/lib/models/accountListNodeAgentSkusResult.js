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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AccountListNodeAgentSkusResult class.
 * @constructor
 * @member {array} [value]
 * 
 * @member {string} [odatanextLink] The URL to get the next set of results.
 * 
 */
function AccountListNodeAgentSkusResult() {
}

util.inherits(AccountListNodeAgentSkusResult, Array);

/**
 * Defines the metadata of AccountListNodeAgentSkusResult
 *
 * @returns {object} metadata of AccountListNodeAgentSkusResult
 *
 */
AccountListNodeAgentSkusResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AccountListNodeAgentSkusResult',
    type: {
      name: 'Composite',
      className: 'AccountListNodeAgentSkusResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'NodeAgentSkuElementType',
                type: {
                  name: 'Composite',
                  className: 'NodeAgentSku'
                }
            }
          }
        },
        odatanextLink: {
          required: false,
          serializedName: 'odata\\.nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AccountListNodeAgentSkusResult;