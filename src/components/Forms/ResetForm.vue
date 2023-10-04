<template>
  <div>
    <HeaderText text="Reset Password" />
  </div>
  <form @submit.prevent="handleSubmit">
    <div class="input-class">
      <BaseInput
        label="New Password"
        v-model="password"
        placeholder="*****"
        type="password"
        required
      />
    </div>

    <div class="input-class">
      <BaseInput
        label="Confirm Password"
        v-model="confirmPass"
        placeholder="*****"
        type="password"
        required
      />
    </div>

    <ErrorMsg :msg="msg" v-if="passError" />
    <div class="btn">
      <BlueButton text="Login"/>
    </div>
    <PasswordValidation :password="password" :reset='true' :confirmPass="confirmPass"/>
  </form>

  <div>
    <NavLink route="login" name="Back to Login" />
  </div>
</template>
  
  <script lang="ts">
import HeaderText from "../HeaderText.vue";
import BlueButton from "../Buttons/BlueButton.vue";
import NavLink from "../NavLink.vue";
import BaseInput from "./BaseInput.vue";
import ErrorMsg from "../ErrorMsg.vue";
import { ref, watch } from "vue";
import PasswordValidation from "./PasswordValidation.vue";

export default {
  components: {
    HeaderText,
    BlueButton,
    NavLink,
    BaseInput,
    ErrorMsg,
    PasswordValidation
  },

  setup() {
    const password = ref("");
    const confirmPass = ref("");
    const passError = ref(false);
    const msg = ref("")

    watch(password, () => {
      passError.value = false;
    });
    const handleSubmit = () => {
      if (password.value !== confirmPass.value) {
        passError.value = true;
        msg.value='Passwords does not match'
      }
      
      else {
        alert("password changed successfully");
      }
    };

    return {
      password,
      confirmPass,
      handleSubmit,
      passError,
      msg,
    };
  },
};
</script>
  
  <style scoped>
.btn {
  margin-top: 20px;
}
.input-class {
  display: flex;
  height: 78px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
}
</style>