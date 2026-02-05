# UserApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUser**](UserApi.md#createuser) | **POST** /users | Create new user |
| [**getUsers**](UserApi.md#getusers) | **GET** /users | Get list of users |



## createUser

> UserDto createUser(userCreateRequest)

Create new user

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { CreateUserRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  const body = {
    // UserCreateRequest
    userCreateRequest: ...,
  } satisfies CreateUserRequest;

  try {
    const data = await api.createUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userCreateRequest** | [UserCreateRequest](UserCreateRequest.md) |  | |

### Return type

[**UserDto**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUsers

> Array&lt;UserDto&gt; getUsers()

Get list of users

### Example

```ts
import {
  Configuration,
  UserApi,
} from '';
import type { GetUsersRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UserApi();

  try {
    const data = await api.getUsers();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;UserDto&gt;**](UserDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

