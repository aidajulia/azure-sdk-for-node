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
 * Initializes a new instance of the USqlProcedureList class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL procedure item list.
 * @member {array} [value] Gets the list of procedure in the database and
 * schema combination
 * 
 */
function USqlProcedureList() {
}

util.inherits(USqlProcedureList, Array);

/**
 * Defines the metadata of USqlProcedureList
 *
 * @returns {object} metadata of USqlProcedureList
 *
 */
USqlProcedureList.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlProcedureList',
    type: {
      name: 'Composite',
      className: 'USqlProcedureList',
      modelProperties: {
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        },
        value: {
          required: false,
          readOnly: true,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'USqlProcedureElementType',
                type: {
                  name: 'Composite',
                  className: 'USqlProcedure'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = USqlProcedureList;