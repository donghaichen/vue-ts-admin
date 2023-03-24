<script lang="tsx">
import { defineComponent, reactive, ref } from "vue";
import { NFormItemRow, NInput, NButton } from "naive-ui";
export default defineComponent({
  name: "PassWord",
  props: {
    value: {
      type: [String],
      default: "",
    },
  },
  emits: ["update:value"],
  setup(props, { emit }) {
    return () => (
      <NFormItemRow path="password">
        <NInput
          type="password"
          value={props.value}
          onInput={(ev: any) => emit("update:value", ev)}
          show-password-on="click"
          placeholder="默认密码 Pass123456"
        />
      </NFormItemRow>
    );
  },
});
</script>
