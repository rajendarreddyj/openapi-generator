/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AdditionalPropertiesClass from './model/AdditionalPropertiesClass';
import Animal from './model/Animal';
import ApiResponse from './model/ApiResponse';
import ArrayOfArrayOfNumberOnly from './model/ArrayOfArrayOfNumberOnly';
import ArrayOfNumberOnly from './model/ArrayOfNumberOnly';
import ArrayTest from './model/ArrayTest';
import Capitalization from './model/Capitalization';
import Cat from './model/Cat';
import CatAllOf from './model/CatAllOf';
import Category from './model/Category';
import ClassModel from './model/ClassModel';
import Client from './model/Client';
import Dog from './model/Dog';
import DogAllOf from './model/DogAllOf';
import EnumArrays from './model/EnumArrays';
import EnumClass from './model/EnumClass';
import EnumTest from './model/EnumTest';
import File from './model/File';
import FileSchemaTestClass from './model/FileSchemaTestClass';
import Foo from './model/Foo';
import FormatTest from './model/FormatTest';
import HasOnlyReadOnly from './model/HasOnlyReadOnly';
import HealthCheckResult from './model/HealthCheckResult';
import InlineResponseDefault from './model/InlineResponseDefault';
import List from './model/List';
import MapTest from './model/MapTest';
import MixedPropertiesAndAdditionalPropertiesClass from './model/MixedPropertiesAndAdditionalPropertiesClass';
import Model200Response from './model/Model200Response';
import Name from './model/Name';
import NullableClass from './model/NullableClass';
import NumberOnly from './model/NumberOnly';
import Order from './model/Order';
import OuterComposite from './model/OuterComposite';
import OuterEnum from './model/OuterEnum';
import OuterEnumDefaultValue from './model/OuterEnumDefaultValue';
import OuterEnumInteger from './model/OuterEnumInteger';
import OuterEnumIntegerDefaultValue from './model/OuterEnumIntegerDefaultValue';
import OuterObjectWithEnumProperty from './model/OuterObjectWithEnumProperty';
import Pet from './model/Pet';
import ReadOnlyFirst from './model/ReadOnlyFirst';
import Return from './model/Return';
import SpecialModelName from './model/SpecialModelName';
import Tag from './model/Tag';
import User from './model/User';
import AnotherFakeApi from './api/AnotherFakeApi';
import DefaultApi from './api/DefaultApi';
import FakeApi from './api/FakeApi';
import FakeClassnameTags123Api from './api/FakeClassnameTags123Api';
import PetApi from './api/PetApi';
import StoreApi from './api/StoreApi';
import UserApi from './api/UserApi';


/**
* This_spec_is_mainly_for_testing_Petstore_server_and_contains_fake_endpoints_models__Please_do_not_use_this_for_any_other_purpose__Special_characters___.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OpenApiPetstore = require('index'); // See note below*.
* var xxxSvc = new OpenApiPetstore.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OpenApiPetstore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OpenApiPetstore.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OpenApiPetstore.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdditionalPropertiesClass model constructor.
     * @property {module:model/AdditionalPropertiesClass}
     */
    AdditionalPropertiesClass,

    /**
     * The Animal model constructor.
     * @property {module:model/Animal}
     */
    Animal,

    /**
     * The ApiResponse model constructor.
     * @property {module:model/ApiResponse}
     */
    ApiResponse,

    /**
     * The ArrayOfArrayOfNumberOnly model constructor.
     * @property {module:model/ArrayOfArrayOfNumberOnly}
     */
    ArrayOfArrayOfNumberOnly,

    /**
     * The ArrayOfNumberOnly model constructor.
     * @property {module:model/ArrayOfNumberOnly}
     */
    ArrayOfNumberOnly,

    /**
     * The ArrayTest model constructor.
     * @property {module:model/ArrayTest}
     */
    ArrayTest,

    /**
     * The Capitalization model constructor.
     * @property {module:model/Capitalization}
     */
    Capitalization,

    /**
     * The Cat model constructor.
     * @property {module:model/Cat}
     */
    Cat,

    /**
     * The CatAllOf model constructor.
     * @property {module:model/CatAllOf}
     */
    CatAllOf,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The ClassModel model constructor.
     * @property {module:model/ClassModel}
     */
    ClassModel,

    /**
     * The Client model constructor.
     * @property {module:model/Client}
     */
    Client,

    /**
     * The Dog model constructor.
     * @property {module:model/Dog}
     */
    Dog,

    /**
     * The DogAllOf model constructor.
     * @property {module:model/DogAllOf}
     */
    DogAllOf,

    /**
     * The EnumArrays model constructor.
     * @property {module:model/EnumArrays}
     */
    EnumArrays,

    /**
     * The EnumClass model constructor.
     * @property {module:model/EnumClass}
     */
    EnumClass,

    /**
     * The EnumTest model constructor.
     * @property {module:model/EnumTest}
     */
    EnumTest,

    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File,

    /**
     * The FileSchemaTestClass model constructor.
     * @property {module:model/FileSchemaTestClass}
     */
    FileSchemaTestClass,

    /**
     * The Foo model constructor.
     * @property {module:model/Foo}
     */
    Foo,

    /**
     * The FormatTest model constructor.
     * @property {module:model/FormatTest}
     */
    FormatTest,

    /**
     * The HasOnlyReadOnly model constructor.
     * @property {module:model/HasOnlyReadOnly}
     */
    HasOnlyReadOnly,

    /**
     * The HealthCheckResult model constructor.
     * @property {module:model/HealthCheckResult}
     */
    HealthCheckResult,

    /**
     * The InlineResponseDefault model constructor.
     * @property {module:model/InlineResponseDefault}
     */
    InlineResponseDefault,

    /**
     * The List model constructor.
     * @property {module:model/List}
     */
    List,

    /**
     * The MapTest model constructor.
     * @property {module:model/MapTest}
     */
    MapTest,

    /**
     * The MixedPropertiesAndAdditionalPropertiesClass model constructor.
     * @property {module:model/MixedPropertiesAndAdditionalPropertiesClass}
     */
    MixedPropertiesAndAdditionalPropertiesClass,

    /**
     * The Model200Response model constructor.
     * @property {module:model/Model200Response}
     */
    Model200Response,

    /**
     * The Name model constructor.
     * @property {module:model/Name}
     */
    Name,

    /**
     * The NullableClass model constructor.
     * @property {module:model/NullableClass}
     */
    NullableClass,

    /**
     * The NumberOnly model constructor.
     * @property {module:model/NumberOnly}
     */
    NumberOnly,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The OuterComposite model constructor.
     * @property {module:model/OuterComposite}
     */
    OuterComposite,

    /**
     * The OuterEnum model constructor.
     * @property {module:model/OuterEnum}
     */
    OuterEnum,

    /**
     * The OuterEnumDefaultValue model constructor.
     * @property {module:model/OuterEnumDefaultValue}
     */
    OuterEnumDefaultValue,

    /**
     * The OuterEnumInteger model constructor.
     * @property {module:model/OuterEnumInteger}
     */
    OuterEnumInteger,

    /**
     * The OuterEnumIntegerDefaultValue model constructor.
     * @property {module:model/OuterEnumIntegerDefaultValue}
     */
    OuterEnumIntegerDefaultValue,

    /**
     * The OuterObjectWithEnumProperty model constructor.
     * @property {module:model/OuterObjectWithEnumProperty}
     */
    OuterObjectWithEnumProperty,

    /**
     * The Pet model constructor.
     * @property {module:model/Pet}
     */
    Pet,

    /**
     * The ReadOnlyFirst model constructor.
     * @property {module:model/ReadOnlyFirst}
     */
    ReadOnlyFirst,

    /**
     * The Return model constructor.
     * @property {module:model/Return}
     */
    Return,

    /**
     * The SpecialModelName model constructor.
     * @property {module:model/SpecialModelName}
     */
    SpecialModelName,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The AnotherFakeApi service constructor.
    * @property {module:api/AnotherFakeApi}
    */
    AnotherFakeApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi,

    /**
    * The FakeApi service constructor.
    * @property {module:api/FakeApi}
    */
    FakeApi,

    /**
    * The FakeClassnameTags123Api service constructor.
    * @property {module:api/FakeClassnameTags123Api}
    */
    FakeClassnameTags123Api,

    /**
    * The PetApi service constructor.
    * @property {module:api/PetApi}
    */
    PetApi,

    /**
    * The StoreApi service constructor.
    * @property {module:api/StoreApi}
    */
    StoreApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
