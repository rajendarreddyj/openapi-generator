//
// ArrayOfNumberOnly.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

public struct ArrayOfNumberOnly: Codable, Hashable {

    public private(set) var arrayNumber: [Double]?

    public init(arrayNumber: [Double]? = nil) {
        self.arrayNumber = arrayNumber
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case arrayNumber = "ArrayNumber"
    }

}
