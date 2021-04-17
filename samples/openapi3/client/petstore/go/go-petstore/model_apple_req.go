/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package petstore

import (
	"encoding/json"
)

// AppleReq struct for AppleReq
type AppleReq struct {
	Cultivar string `json:"cultivar"`
	Mealy *bool `json:"mealy,omitempty"`
	AdditionalProperties map[string]interface{}
}

type _AppleReq AppleReq

// NewAppleReq instantiates a new AppleReq object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAppleReq(cultivar string) *AppleReq {
	this := AppleReq{}
	this.Cultivar = cultivar
	return &this
}

// NewAppleReqWithDefaults instantiates a new AppleReq object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAppleReqWithDefaults() *AppleReq {
	this := AppleReq{}
	return &this
}

// GetCultivar returns the Cultivar field value
func (o *AppleReq) GetCultivar() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Cultivar
}

// GetCultivarOk returns a tuple with the Cultivar field value
// and a boolean to check if the value has been set.
func (o *AppleReq) GetCultivarOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Cultivar, true
}

// SetCultivar sets field value
func (o *AppleReq) SetCultivar(v string) {
	o.Cultivar = v
}

// GetMealy returns the Mealy field value if set, zero value otherwise.
func (o *AppleReq) GetMealy() bool {
	if o == nil || o.Mealy == nil {
		var ret bool
		return ret
	}
	return *o.Mealy
}

// GetMealyOk returns a tuple with the Mealy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AppleReq) GetMealyOk() (*bool, bool) {
	if o == nil || o.Mealy == nil {
		return nil, false
	}
	return o.Mealy, true
}

// HasMealy returns a boolean if a field has been set.
func (o *AppleReq) HasMealy() bool {
	if o != nil && o.Mealy != nil {
		return true
	}

	return false
}

// SetMealy gets a reference to the given bool and assigns it to the Mealy field.
func (o *AppleReq) SetMealy(v bool) {
	o.Mealy = &v
}

func (o AppleReq) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["cultivar"] = o.Cultivar
	}
	if o.Mealy != nil {
		toSerialize["mealy"] = o.Mealy
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *AppleReq) UnmarshalJSON(bytes []byte) (err error) {
	varAppleReq := _AppleReq{}

	if err = json.Unmarshal(bytes, &varAppleReq); err == nil {
		*o = AppleReq(varAppleReq)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "cultivar")
		delete(additionalProperties, "mealy")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableAppleReq struct {
	value *AppleReq
	isSet bool
}

func (v NullableAppleReq) Get() *AppleReq {
	return v.value
}

func (v *NullableAppleReq) Set(val *AppleReq) {
	v.value = val
	v.isSet = true
}

func (v NullableAppleReq) IsSet() bool {
	return v.isSet
}

func (v *NullableAppleReq) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAppleReq(val *AppleReq) *NullableAppleReq {
	return &NullableAppleReq{value: val, isSet: true}
}

func (v NullableAppleReq) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAppleReq) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


