# TaskApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserTasks**](TaskApi.md#getusertasks) | **GET** /users/{userId}/tasks | Get tasks for a specific user |



## getUserTasks

> Array&lt;TaskDto&gt; getUserTasks(userId)

Get tasks for a specific user

### Example

```ts
import {
  Configuration,
  TaskApi,
} from '';
import type { GetUserTasksRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new TaskApi();

  const body = {
    // number
    userId: 56,
  } satisfies GetUserTasksRequest;

  try {
    const data = await api.getUserTasks(body);
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
| **userId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**Array&lt;TaskDto&gt;**](TaskDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of user tasks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

