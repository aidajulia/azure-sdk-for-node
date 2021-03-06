/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PartitionCurrentConfigurationEpoch class.
 * @constructor
 * The epoch of the current configuration
 * @member {string} [configurationVersion]
 * 
 * @member {string} [dataLossVersion]
 * 
 */
function PartitionCurrentConfigurationEpoch() {
}

/**
 * Defines the metadata of PartitionCurrentConfigurationEpoch
 *
 * @returns {object} metadata of PartitionCurrentConfigurationEpoch
 *
 */
PartitionCurrentConfigurationEpoch.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Partition_CurrentConfigurationEpoch',
    type: {
      name: 'Composite',
      className: 'PartitionCurrentConfigurationEpoch',
      modelProperties: {
        configurationVersion: {
          required: false,
          serializedName: 'ConfigurationVersion',
          type: {
            name: 'String'
          }
        },
        dataLossVersion: {
          required: false,
          serializedName: 'DataLossVersion',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PartitionCurrentConfigurationEpoch;
