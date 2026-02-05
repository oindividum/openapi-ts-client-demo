import { UserApi, TaskApi } from "../clients/ts-fetch/apis";
import { Configuration } from "../clients/ts-fetch/runtime";

async function main() {
  const config = new Configuration({
    basePath: "http://localhost:8080"
  });

  const userApi = new UserApi(config);
  const taskApi = new TaskApi(config);

  const users = await userApi.getUsers();
  console.log("Users:", users);
}

main();
