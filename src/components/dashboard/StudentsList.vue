<template>
  <div>
    <div v-if="loading">
      <h1>Loading....</h1>
    </div>
    <DashboardActions text="Students" btnText="Add new students" icon="school" />
    <UsersTable :users="result?.getAllUsers" text="Student ID" />
    <UploadModal v-show="open">
      <ModalHeaderText header="Tell us a little about the student you are adding"
        subHeader="Please fill the following details to get started" />

      <BaseInput placeholder="Email" type="email" v-model="email" />
      <br>
      <BaseInput placeholder="Firstname" type="text" v-model="fname" />
      <br>
      <BaseInput placeholder="Lastname" type="text" v-model="lname" />
      <br>
      <CreateUserButton text="Create" :border="false" width="100px" @log="logName" />
    </UploadModal>

    <FileModal v-show="openFile">
      <ModalHeaderText header="Upload a file" subHeader="Please upload a file to get started" />
      <UploadFile />
    </FileModal>
  </div>
</template>

<script lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { usersQueries } from "../../graphQL/queries";
import UsersTable from "./UsersTable.vue";
import DashboardActions from "./DashboardActions.vue";
import UploadModal from "./UploadModal.vue";
import FileModal from "./FileModal.vue";
import ModalHeaderText from "./ModalHeaderText.vue";
import BaseInput from "../Forms/BaseInput.vue";
import CreateUserButton from "../Buttons/CreateUserButton.vue";
import UploadFile from "./UploadFile.vue";


import { ref, watchEffect } from 'vue'
import store from '@/store';

export default {
  components: {
    UsersTable,
    DashboardActions,
    UploadModal,
    ModalHeaderText,
    BaseInput,
    CreateUserButton,
    FileModal,
    UploadFile
  },

  setup() {
    const { loading, result } = useQuery(usersQueries);
    const email = ref('')
    const fname = ref('')
    const lname = ref('')
    const open = ref(false)
    const openFile = ref(false)


    const logName = () => {
      console.log(email.value);
      alert('user created successfully')
    }

    watchEffect(() => {
      open.value = store.getters.openModal
      console.log('state', store.getters.openModal);
    })

    watchEffect(() => {
      openFile.value = store.getters.openFileModal
      open.value = false
    })

    return {
      loading,
      result,
      email,
      fname,
      lname,
      logName,
      open,
      openFile
    };
  },
};
</script>
