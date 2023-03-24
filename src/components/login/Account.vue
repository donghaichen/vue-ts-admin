<template>
  <NForm ref="formRef" :model="model" :rules="rules">
    <NFormItem path="username">
      <NInput
        v-model:value="model.username"
        placeholder="请输入用户名"
        @keydown.enter.prevent
      >
        <template #prefix>
          <NIcon :component="PersonOutline" />
        </template>
      </NInput>
    </NFormItem>
    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        placeholder="请输入密码"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      >
        <template #prefix>
          <NIcon :component="LockClosedOutline" />
        </template>
      </NInput>
    </NFormItem>
    <NFormItem>
      <NButton
        :disabled="model.password === null"
        block
        type="primary"
        @click="submit"
      >
        安全登录
      </NButton>
    </NFormItem>
  </NForm>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { FormInst, FormItemInst, FormItemRule, FormRules } from "naive-ui";
import { useMessage, NForm, NFormItem, NInput, NButton, NIcon } from "naive-ui";
import { PersonOutline, LockClosedOutline } from "@vicons/ionicons5";

interface ModelType {
  username: string | null;
  password: string | null;
  reenteredPassword: string | null;
}

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();
const modelRef = ref<ModelType>({
  username: null,
  password: null,
  reenteredPassword: null,
});

const model = modelRef;

const validatePasswordStartWith = (rule: FormItemRule, value: string) => {
  return (
    !!modelRef.value.password &&
    modelRef.value.password.startsWith(value) &&
    modelRef.value.password.length >= value.length
  );
};
const validatePasswordSame = (rule: FormItemRule, value: string) => {
  return value === modelRef.value.password;
};

const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("请输入用户名");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: ["input", "blur"],
    },
  ],
};
const submit = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("验证成功");
    } else {
      console.log(errors);
      message.error("验证失败");
    }
  });
};

const handlePasswordInput = () => {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
};
</script>
