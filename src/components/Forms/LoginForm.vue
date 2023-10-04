<template>
  <div>
    <HeaderText text="Welcome Back , Log in" />
  </div>
  <form @submit.prevent="handleSubmit">
    <ErrorMsg :msg="msg" v-if="emailAndPassError" />
    <div class="input-class">
      <BaseInput
        label="Email / Staff ID"
        v-model="email"
        placeholder="Enter your email or staff ID"
        type="email"
        required
      />
    </div>
    <ErrorMsg :msg="msg" v-if="emailError" />

    <div class="input-class">
      <BaseInput
        label="Password"
        v-model="password"
        placeholder="Enter your password"
        type="password"
        required
      
      />
    </div>

    <div class="btn">
      <BlueButton text="Login"  />
    </div>
    <PasswordValidation :password="password" />
  </form>
  <div>
    <NavLink route="reset" name="Reset Password" />
  </div>
</template>
  
  <script lang="ts">
import HeaderText from "../HeaderText.vue";
import BlueButton from "../Buttons/BlueButton.vue";
import NavLink from "../NavLink.vue";
import BaseInput from "./BaseInput.vue";
import ErrorMsg from "../ErrorMsg.vue";
import { ref, watch,  } from "vue";
import PasswordValidation from "./PasswordValidation.vue";

export default {
  components: {
    HeaderText,
    BlueButton,
    NavLink,
    BaseInput,
    ErrorMsg,
    PasswordValidation,
  },

  setup() {
    const email = ref("");
    const password = ref("");
    const passError = ref(false);
    const emailError = ref(false);
    const msg = ref("");
    const emailAndPassError = ref(false);


    watch(email, () => {
      emailError.value = false;
    });
    const handleSubmit = () => {
      if (email.value === "me@gmail.com") {
        emailError.value = true;
        msg.value = "Email Already exist";
      } else if (email.value !== "ben@gmail.com" && password.value !== "pass") {
        emailAndPassError.value = true;
        msg.value = "Email or password incorrect";
      } else {
        alert("Login successfull");
      }
    };

   

    return {
      password,
      email,
      handleSubmit,
      passError,
      msg,
      emailError,
      emailAndPassError,
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