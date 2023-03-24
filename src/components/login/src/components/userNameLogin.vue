<template>
  <NForm
    ref="ElRef"
    :model="formValue"
    :rules="userRules"
    label-placement="left"
  >
    <UserName v-model:value="formValue.userName" />
    <PassWord v-model:value="formValue.password" />
    <PictureCode
      v-model:value="formValue.picCode"
      v-model:picId="formValue.picId"
    />
  </NForm>
</template>
<script setup lang="ts" name="UserNameLogin">
import { defineComponent, reactive, ref } from "vue";
import { NFormItemRow, NInput, NButton } from "naive-ui";

import type { IUserNameLogin } from "../type";
import UserName from "./userName.vue";
import PassWord from "./passWord.vue";

const formValue: IUserNameLogin = reactive({
  userName: "Admin",
  password: "A123456",
  picCode: "",
  picId: "",
});
// const { ElRef, loginValidate, loading } = userNameLogin(formValue);
const subMit = (
  callback: (params: IUserNameLogin) => {},
  // err: Fn = () => {}
) => {
  // loginValidate(
  //   () => (callback ? callback(formValue) : null),
  //   () => err()
  // );
};
defineExpose({
  subMit,
  // loading,
});
</script>
