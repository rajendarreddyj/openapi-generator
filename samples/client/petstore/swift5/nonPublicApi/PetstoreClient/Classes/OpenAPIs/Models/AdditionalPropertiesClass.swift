//
// AdditionalPropertiesClass.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

internal struct AdditionalPropertiesClass: Codable, Hashable {

    internal var mapString: [String: String]?
    internal var mapMapString: [String: [String: String]]?

    internal init(mapString: [String: String]? = nil, mapMapString: [String: [String: String]]? = nil) {
        self.mapString = mapString
        self.mapMapString = mapMapString
    }

    internal enum CodingKeys: String, CodingKey, CaseIterable {
        case mapString = "map_string"
        case mapMapString = "map_map_string"
    }

}
